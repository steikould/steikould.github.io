export interface Technology {
  name: string
  icon: string // SVG path data or icon identifier
  hoverContent: string
  color: string // Primary color for the icon
}

export interface TechnologySection {
  title: string
  description: string
  technologies: Technology[]
}

export const productionCoreStack: Technology[] = [
  {
    name: 'Google Cloud (GCP) / Vertex AI',
    icon: 'gcp',
    color: '#4285F4',
    hoverContent: 'End-to-end MLOps backbone for fuel pipeline operations: Orchestrating real-time sensor data pipelines from PI System through BigQuery, training forecasting models in Vertex AI, and serving predictions to operations dashboards—all with enterprise SLAs and security compliance.'
  },
  {
    name: 'Python',
    icon: 'python',
    color: '#3776AB',
    hoverContent: 'The universal language for industrial data engineering: Building custom feature transforms for pump telemetry, implementing domain-specific ML algorithms for fuel blending optimization, and automating operational workflows from sensor ingestion to model deployment.'
  },
  {
    name: 'TensorFlow',
    icon: 'tensorflow',
    color: '#FF6F00',
    hoverContent: 'Production-grade model deployment for critical infrastructure: Training time-series forecasting models for pipeline flow optimization and deploying anomaly detection models that run 24/7 on production data streams with strict latency requirements.'
  },
  {
    name: 'Kubernetes & Docker',
    icon: 'kubernetes',
    color: '#326CE5',
    hoverContent: 'Container orchestration for resilient industrial ML systems: Deploying data processing jobs, model inference services, and API endpoints across multi-region clusters to ensure zero-downtime operations for mission-critical fuel pipeline monitoring.'
  },
  {
    name: 'Apache Beam/Dataflow',
    icon: 'beam',
    color: '#00D1B2',
    hoverContent: 'Scalable feature engineering at industrial scale: Processing millions of sensor readings per hour from PI System historians, computing rolling aggregations and statistical features, and serving fresh features to both batch training jobs and real-time inference APIs.'
  },
  {
    name: 'MLflow / Weights & Biases',
    icon: 'mlflow',
    color: '#0194E2',
    hoverContent: 'Production ML experiment tracking and model governance: Logging every training run with hyperparameters and business metrics, versioning models with full lineage from raw sensor data to deployed endpoint, and maintaining audit trails for regulatory compliance.'
  },
  {
    name: 'Terraform',
    icon: 'terraform',
    color: '#7B42BC',
    hoverContent: 'Infrastructure-as-code for reproducible ML platforms: Defining entire data pipelines, feature stores, and model serving infrastructure as versioned code, enabling rapid environment provisioning and disaster recovery for enterprise AI systems.'
  },
  {
    name: 'BigQuery',
    icon: 'bigquery',
    color: '#4285F4',
    hoverContent: 'Centralized analytics warehouse for operational intelligence: Storing petabytes of historical sensor data from fuel terminals, enabling SQL-based feature engineering for ML pipelines, and powering business intelligence dashboards for operations teams.'
  }
]

export const aiFutureInvestments: Technology[] = [
  {
    name: 'Operational Knowledge Assistant',
    icon: 'llamaindex',
    color: '#8B5CF6',
    hoverContent: 'Natural language interface for tribal knowledge: Building RAG-based agents that query historical PI System logs, maintenance manuals, and engineering specs—eliminating learning curves by providing instant expert-level answers. Implementation via LlamaIndex or Haystack with custom retrieval pipelines.'
  },
  {
    name: 'Enterprise Feature Store',
    icon: 'feast',
    color: '#FF6B6B',
    hoverContent: 'Centralized feature governance across teams: Versioning and serving critical calculated features (pump vibration thresholds, flow rate aggregations) consistently to training and inference—enabling collaboration while maintaining compliance. Built using Feast or Tecton for low-latency access.'
  },
  {
    name: 'Edge Intelligence Deployment',
    icon: 'kubeedge',
    color: '#00C7B7',
    hoverContent: 'Real-time decision-making at the edge: Deploying lightweight anomaly detection models directly onto industrial gateways and PLCs for sub-second response to critical events—reducing cloud latency for cyberphysical systems. Orchestrated with KubeEdge and optimized via TensorFlow Lite.'
  },
  {
    name: 'Semantic Log & Sensor Search',
    icon: 'qdrant',
    color: '#DC2626',
    hoverContent: 'Finding patterns in unstructured operational data: Vectorizing sensor time-series and machine logs to enable similarity search—"show me all incidents similar to this anomaly"—transforming failure analysis from manual review to AI-powered discovery. Powered by Qdrant or Milvus vector databases.'
  },
  {
    name: 'Data Lake Version Control',
    icon: 'lakefs',
    color: '#4F46E5',
    hoverContent: 'Git-style workflows for industrial datasets: Branching data lakes to test ML pipelines in isolation before merging to production—ensuring reproducibility and audit trails for regulated industries. Implemented with lakeFS for Write-Audit-Publish compliance patterns.'
  }
]

export const technologySections: TechnologySection[] = [
  {
    title: 'Production Core Stack',
    description: 'Technologies used in current enterprise, production-grade solutions',
    technologies: productionCoreStack
  },
  {
    title: 'AI Future Investments',
    description: 'Emerging tools for next-generation market demands',
    technologies: aiFutureInvestments
  }
]
