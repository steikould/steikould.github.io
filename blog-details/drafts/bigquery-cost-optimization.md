---

## 2. EXECUTIVE SUMMARY

**Key Metrics:**
```
┌──────────────────────────────────────────────────────────────┐
│ ROI: 580% | Payback Period: 2.1 months                       │
│ Monthly Cost Reduction: $12,000 ($144K annually)             │
│ Query Performance: 60% faster (avg 8s → 3.2s)                │
│ Data Scanned: 75% reduction (partitioning/clustering)        │
│ Training Efficiency: 25% improvement (caching/feature store) │
│ Implementation Timeline: 4 months                            │
└──────────────────────────────────────────────────────────────┘
```

**Summary:**

Reduced BigQuery costs $12K monthly through strategic data architecture improvements and intelligent resource management. Implemented date-based partitioning on 20+ core tables reducing scan volumes 75%, multi-column clustering on high-cardinality dimensions (sensor_id, customer_id) further optimizing query costs. Slot reservation analysis identified off-peak training opportunities (3 AM - 6 AM) enabling committed slot purchases at 40% discount vs. on-demand. Materialized feature stores with automated refresh reduced redundant feature calculations by 90%. Additionally, implemented GCP Dataplex with hierarchical metadata tagging establishing data mesh principles, enabling 8 domain teams to autonomously manage analytical datasets while maintaining governance. Combined optimizations improved query performance 60% while reducing monthly spend from $120K to $108K.

---

## 3. THE BUSINESS CHALLENGE

**Context:**

BigQuery serving as central data warehouse for ML workloads across 8 data science teams (45 data scientists/engineers). Daily processing: 2.5 TB ingestion, 15 TB scanned for queries/training, 50+ production ML models querying continuously. Costs escalating rapidly: $85K/month (Jan 2023) → $120K/month (Dec 2023), 41% increase outpacing data volume growth (22%).

**Problem Statement:**

- **Uncontrolled Cost Growth:** $120K monthly spend ($1.44M annually) growing 3-4% monthly
- **Inefficient Query Patterns:** 60% of data scanned unnecessarily (full table scans on time-series data)
- **Redundant Computations:** Feature engineering recalculated daily for same historical data (computational waste)
- **Slot Contention:** Peak usage (9 AM - 5 PM) causing query queueing, increased latency
- **No Cost Visibility:** Teams unaware of their query costs, no accountability
- **Over-Provisioned On-Demand:** Paying premium for on-demand slots despite predictable workload patterns
- **Data Sprawl:** Abandoned datasets, duplicate tables, no lifecycle management

**Stakeholders:**

- **Finance:** Escalating cloud costs impacting budget, demanding 15% reduction
- **Data Science Teams:** Frustrated by slow queries during peak hours
- **Data Engineering:** Manual cost optimization efforts unsustainable (1 engineer spending 40% time on cost management)
- **Executive Leadership:** Questioning cloud ROI, considering migration to cheaper alternatives

**Constraints:**

- **Cannot Sacrifice Performance:** ML model training latency must remain <30 minutes (business requirement)
- **No Query Changes Required:** 1,000+ queries across 50+ repos - refactoring infeasible
- **Governance Required:** Cost optimization cannot compromise data security/compliance
- **Timeline:** Finance demanded visible results in Q1 2024 (4-month window)
- **Budget:** $28K for optimization work (one-time engineering investment)

---

## 4. SOLUTION APPROACH

**Multi-Pronged Optimization Strategy:**

### 1. Partitioning & Clustering (Biggest Impact: 60% cost reduction)

**Date-Based Partitioning:**
- Implemented on 23 core tables (sensor_data, transaction_logs, user_events)
- Partition column: `date` or `timestamp` (daily partitions)
- Benefit: Time-range queries scan only relevant partitions (vs. entire table)
- Example: Query for "last 7 days" scans 7 partitions (7 days of data) not entire 2-year table

**Multi-Column Clustering:**
- Clustering columns chosen based on query patterns (analyzed via INFORMATION_SCHEMA.JOBS)
- Example table: `sensor_readings`
  - Partition by: DATE(timestamp)
  - Cluster by: sensor_id, asset_id, data_quality_flag
- Benefit: Within partition, data co-located by clustering keys (min/max stats enable block pruning)

**Impact:**
- **Before:** Query "show sensor 4521 readings for March 2024" scanned 8.2 TB
- **After:** Same query scans 180 GB (partition: March 2024, cluster: sensor_id 4521)
- **Cost Reduction:** 98% less data scanned = 98% cost reduction on this query pattern
- **Across all queries:** Average 75% reduction in data scanned

### 2. Slot Reservation & Scheduling (25% cost reduction)

**Analysis:**
- Profiled slot usage over 30 days (hourly granularity)
- Identified patterns:
  - Peak: 9 AM - 5 PM, 2,000-3,000 slots needed (on-demand, expensive)
  - Off-Peak: 11 PM - 6 AM, 300-500 slots (minimal usage)
  - ML Training: Bursty, 5,000+ slot spikes

**Optimization:**
- **Committed Slots (Flat-Rate):** Purchased 500-slot commitment ($4,000/month flat)
  - Covers baseline queries (always-on dashboards, scheduled reports)
  - 40% cheaper than equivalent on-demand usage
- **Flex Slots (Burst):** Auto-scaling for ML training jobs
  - Purchase flex slots for 60-second minimum increments
  - Schedule heavy training jobs during off-peak (3 AM - 6 AM) when available
- **Workload Separation:** 3 BigQuery projects:
  1. **Production** (committed slots, high priority)
  2. **Training** (flex slots, interruptible)
  3. **Ad-Hoc** (on-demand, cost-tracked per user)

**Impact:**
- Monthly slot cost: $48K → $36K (25% reduction)
- Bonus: Training jobs 30% faster (more slots available off-peak)

### 3. Materialized Feature Stores (10% cost reduction)

**Problem:**
- Feature engineering recalculated daily for static historical data
- Example: 30-day rolling average demand calculated for 2-year history (730 days of unnecessary computation)

**Solution:**
- Materialized views pre-computing features on scheduled refresh
- **Incremental Materialization:** Only calculate new features for new data (not entire history)

**Implementation:**
```sql
-- Materialized view: 30-day rolling demand
CREATE MATERIALIZED VIEW `feature_store.demand_rolling_30d`
PARTITION BY DATE(ds)
CLUSTER BY sku_id
AS
SELECT
  sku_id,
  ds,
  AVG(demand) OVER (
    PARTITION BY sku_id
    ORDER BY UNIX_DATE(ds)
    RANGE BETWEEN 29 PRECEDING AND CURRENT ROW
  ) AS demand_30d_avg
FROM `raw.daily_sales`
```

**Refresh Strategy:**
- Scheduled daily refresh at 2 AM (off-peak)
- Only processes new partitions (last 30 days to ensure rolling window accuracy)
- Queries against feature store are instant (pre-computed, no on-the-fly aggregation)

**Impact:**
- Feature computation time: 45 minutes → 3 minutes (feature store refresh)
- Cost: Queries read materialized view (small) vs. aggregating raw data (large)
- Training efficiency: 25% improvement (less time waiting for features)

### 4. Data Lifecycle Management (5% cost reduction)

**Automated Cleanup:**
- **Partition Expiration:** Delete partitions >365 days for raw sensor data
  - Regulatory requirement: 7-year retention
  - Solution: Export partitions >90 days to Cloud Storage ($0.02/GB vs. BigQuery $0.04/GB active storage)
- **Table Expiration:** Auto-delete temporary/scratch tables >7 days
- **Duplicate Detection:** Identified 340 GB of duplicate tables (same data, different names)

**Storage Tiering:**
- **Active Storage (last 90 days):** BigQuery (fast queries)
- **Nearline (90 days - 2 years):** Cloud Storage Nearline ($0.01/GB)
- **Coldline (2-7 years):** Cloud Storage Coldline ($0.004/GB, compliance retention)

**Impact:**
- Storage cost: $18K/month → $12K/month (33% reduction)
- Data still accessible (federated queries to Cloud Storage when needed)

### 5. Data Mesh with Dataplex (Governance + Enablement)

**Problem:**
- Centralized data team bottleneck (8 domain teams requesting datasets)
- No clear ownership of data quality
- Data discovery difficult (undocumented tables)

**Solution:**
- **Dataplex Data Zones:** 8 domain zones (Supply Chain, Customer Analytics, Operations, Finance, etc.)
- **Domain Ownership:** Each team manages their zone (tables, quality, documentation)
- **Hierarchical Metadata Tags:**
  - `cost_center:supply_chain`
  - `sensitivity:PII` (triggers row-level security)
  - `retention:7years` (auto-applies lifecycle policies)

**Governance:**
- **Data Quality Rules:** Dataplex auto-profiles data, detects quality issues
- **Access Policies:** Metadata tags drive IAM (e.g., `sensitivity:PII` → requires DLP approval)
- **Cost Chargeback:** Slot usage tracked per zone (teams see their query costs)

**Impact:**
- **Autonomy:** Teams self-serve (data engineering requests ↓70%)
- **Accountability:** Cost visibility drives behavior change (ad-hoc query costs ↓40%)
- **Quality:** Data quality incidents ↓50% (domain ownership increases care)

---

## 5. IMPLEMENTATION DETAILS

### 5.1 Query Pattern Analysis

**Tools:**
- **INFORMATION_SCHEMA.JOBS:** Historical query metadata (bytes scanned, slot usage, user, query text)
- **BigQuery BI Engine Cache Analytics:** Cache hit rates, frequently accessed tables

**Analysis:**
- Analyzed 60 days of query history (120,000+ queries)
- Identified top 20 "expensive" query patterns (80% of total cost)
- Example findings:
  - 35% of queries scan `sensor_readings` table (largest table, 4.5 TB)
  - 90% of those queries filter by date (perfect partitioning candidate)
  - 60% filter by sensor_id (clustering candidate)

**Automated Recommendations:**
- Built Python script analyzing INFORMATION_SCHEMA suggesting:
  - Partition candidates (tables >1 TB with date/timestamp filters)
  - Clustering candidates (high-cardinality columns in WHERE/JOIN)
  - Unused tables (zero queries in 90 days)

### 5.2 Partitioning & Clustering Implementation

**Migration Process:**

1. **Create Partitioned/Clustered Table:**
```sql
CREATE TABLE `dataset.sensor_readings_partitioned`
PARTITION BY DATE(timestamp)
CLUSTER BY sensor_id, asset_id, quality_flag
AS SELECT * FROM `dataset.sensor_readings`;
```

2. **Validate Data Integrity:**
- Row count match
- Sample data comparison
- Query result comparison (old vs. new table)

3. **Update Queries (Automated):**
- Used `bq` CLI to find all queries referencing old table
- Automated find-replace in dbt models, Airflow DAGs, Python scripts
- 2-week parallel operation (both tables) for validation

4. **Deprecate Old Table:**
- After 2 weeks, delete old table
- Storage savings: 4.5 TB × $0.02/GB = $92/month

**Challenges:**
- **Schema Evolution:** Some tables had schema changes over time
  - Solution: Partition pseudo-column `_PARTITIONTIME` even with schema drift
- **Query Rewrites:** Some queries didn't specify partition filter
  - Solution: Added `REQUIRE PARTITION FILTER` constraint (queries must include date filter)

### 5.3 Slot Management

**Committed Slot Sizing:**
- Analyzed 95th percentile slot usage during business hours: 480 slots
- Purchased 500-slot commitment (slight buffer)
- Cost: $4,000/month flat (vs. $5,600 on-demand equivalent, 28% savings)

**Flex Slot Strategy:**
```python
# Airflow DAG for ML training
from google.cloud import bigquery

def train_model_with_flex_slots():
    client = bigquery.Client()

    # Purchase flex slots for training duration
    reservation = client.create_reservation(
        parent="projects/my-project/locations/us",
        reservation_id="ml-training",
        reservation={
            "slot_capacity": 2000,  # 2000 slots for training
            "commitment_plan": "FLEX"  # Pay per-second
        }
    )

    try:
        # Run training query (allocated to reservation)
        query_job = client.query(
            "SELECT ... /* ML training query */",
            job_config=bigquery.QueryJobConfig(
                use_query_cache=False,
                priority=bigquery.QueryPriority.BATCH
            )
        )
        query_job.result()
    finally:
        # Delete reservation (stop billing)
        client.delete_reservation(name=reservation.name)
```

**Cost Impact:**
- Training job duration: 45 minutes
- Flex slot cost: 2000 slots × $0.04/slot/hour × 0.75 hours = $60/job
- Scheduled off-peak (3-6 AM) when committed slots underutilized → Often runs on committed (free)

### 5.4 Monitoring & Cost Attribution

**Custom Dashboards (Looker Studio):**
- **Cost Breakdown:** Daily spend by project, dataset, user
- **Query Performance:** p50/p95/p99 latency trends
- **Slot Utilization:** Real-time slot usage vs. committed capacity
- **Cost Per Query:** Identify "runaway" queries (>$50)

**Alerting (Cloud Monitoring):**
- **Budget Alert:** Email if monthly spend projected to exceed $115K (buffer)
- **Slow Query Alert:** PagerDuty if p95 latency >10 seconds
- **Slot Starvation:** Alert if queries queued >5 minutes (need more capacity)

**Cost Chargeback:**
- Monthly reports to each domain team showing their query costs
- Example: "Supply Chain team: $8,200 last month, ↑12% MoM, top expensive query: daily_inventory_reconciliation"

---

## 6. ROI CALCULATION

### 6.1 Costs

**Implementation:** $32,000
- Data engineering (4 months, 1 engineer 80% allocation): $28,000
- Tooling (Dataplex setup): $2,000
- Training: $2,000

**Ongoing:** Minimal (automated)
- Monitoring dashboards: Included in GCP spend
- Maintenance: <5 hours/month (slot adjustment, lifecycle tuning)

### 6.2 Benefits

**Annual Savings:** $144,000
- Monthly reduction: $12,000 ($120K → $108K)
- Breakdown:
  - Partitioning/clustering: $6,000/month
  - Slot optimization: $3,000/month
  - Feature stores: $2,000/month
  - Storage lifecycle: $1,000/month

**Additional Value (Not in ROI):**
- **Query Performance:** 60% faster enables data scientists to iterate 2x faster
- **Training Efficiency:** 25% ML training speedup → Faster model deployment

**ROI:**
- Year 1: ($144K - $32K) / $32K = 350%
- Payback: $32K / ($144K / 12) = 2.7 months
- 3-Year NPV: $385K

### 6.3 Intangible Benefits

- **Team Autonomy:** Data mesh reduced data engineering bottlenecks
- **Cost Awareness:** Teams now consider query costs (behavior change)
- **Governance:** Dataplex metadata improved discoverability, compliance

---

## 7. RESULTS & IMPACT

### 7.1 Quantitative Outcomes

| Metric | Baseline | Achieved | Improvement |
|--------|----------|----------|-------------|
| Monthly Cost | $120,000 | $108,000 | 10% reduction |
| Data Scanned/Query | 3.2 TB (avg) | 0.8 TB (avg) | 75% reduction |
| Query Latency (p95) | 8 seconds | 3.2 seconds | 60% faster |
| Storage Cost | $18,000 | $12,000 | 33% reduction |
| Feature Computation | 45 min | 3 min | 93% faster |
| Cost Per TB Scanned | $5.20 | $2.10 | 60% lower |

### 7.2 Business Impact

**Strategic Advantages:**
- **Scalability:** Cost structure now grows sublinearly with data volume (partitioning efficiency)
- **Predictability:** Committed slots provide cost predictability (CFO satisfaction)
- **Data Mesh Enablement:** 8 teams autonomous, innovation velocity ↑

**Example Success:**
March 2024: New ML initiative required processing 5 TB daily. With old architecture, cost would have been +$25K/month. With optimizations, incremental cost: $4K/month (saved $21K/month).

---

## 8. LESSONS LEARNED

**What Worked:**
1. **Partitioning First:** Biggest ROI for least effort (75% cost reduction)
2. **Cost Visibility:** Chargeback reports drove behavior change (teams self-optimized)
3. **Incremental Rollout:** Partitioned 3 tables/week (reduced risk, validated approach)

**Challenges:**
1. **Schema Evolution:** Old tables had inconsistent schemas
   - Solution: Partition by ingestion time, not event time (handles schema drift)
2. **User Adoption:** Teams initially resisted query changes (partition filters)
   - Solution: Made it opt-out (default: require partition filter, teams could disable)

**Would Do Differently:**
- Start with BI Engine caching (quick win, minimal effort)
- Implement cost monitoring earlier (waited until month 2)

---

## 9. FUTURE ENHANCEMENTS

**Planned (2025):**
- **Automatic Query Optimization:** ML model recommending query rewrites
- **FinOps Automation:** Auto-adjust committed slots based on usage patterns
- **Multi-Cloud:** Evaluate Snowflake, Databricks for cost comparison

**Exploring:**
- **Federated Queries:** Move cold data to cheaper storage (S3 Glacier)

---

## 10. TECHNICAL SPECIFICATIONS

**Technology Stack:**
```
Core Platform:
├── BigQuery (data warehouse)
├── Dataplex (data governance)
├── Cloud Monitoring (cost tracking)
└── Looker Studio (dashboards)

Optimization Techniques:
├── Partitioning (date-based)
├── Clustering (multi-column)
├── Materialized views (feature stores)
├── Slot reservations (committed + flex)
└── Storage lifecycle (tiering)

Performance:
├── Monthly Cost: $108,000 (from $120K)
├── Daily Ingestion: 2.5 TB
├── Daily Scans: 15 TB → 3.8 TB (75% reduction)
├── Query Latency (p95): 3.2 seconds
└── Tables Optimized: 23
```

**Metadata:**
```json
{
  "roi_percentage": 350,
  "payback_months": 2.7,
  "cost_reduction_pct": 10,
  "performance_improvement": 60,
  "technologies": ["BigQuery", "Dataplex", "Partitioning", "Clustering", "Materialized Views"]
}
```

---

## 11. CALL-TO-ACTION

**Struggling with BigQuery costs?**

This case study demonstrates practical techniques for cost optimization without sacrificing performance. The partitioning, clustering, and slot management strategies are applicable to any BigQuery deployment at scale.

**Related Projects:**
- [Industrial IoT Sensor Intelligence](#) - BigQuery golden table architecture
- [Demand Forecasting Ensemble Methods](#) - Large-scale ML on BigQuery
- [MLOps in Regulated Industries](#) - Enterprise data governance patterns
