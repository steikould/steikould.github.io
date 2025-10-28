import { Project } from '@/components/projects/ProjectCard'

export const projects: Project[] = [
  {
    id: 'fuel-pump-anomaly-detection',
    title: '$3.9M Projected Annual Savings: Industrial Anomaly Detection',
    description: 'Production-grade multi-model ensemble ML system combining LSTM Autoencoder, Isolation Forest, and Transformer models. Achieved 96% F1-score with 33% reduction in false positives, projecting $3.9M annual savings through 97% recall and reduced maintenance costs for fuel blending facility.',
    longDescription: `A sophisticated machine learning pipeline for detecting anomalies in fuel pump systems at an Atlanta fuel blending facility, combining three complementary models using hybrid ensemble approach with stacking meta-learner deployed on Google Cloud Platform.

    Architected multi-model ensemble combining LSTM Autoencoder for temporal sequence anomalies (89% F1), Isolation Forest for statistical outliers (94% F1), and Transformer for complex multi-sensor correlations. Implemented hybrid ensemble with weighted averaging and stacking meta-learner (Logistic Regression) achieving 96% F1-score, reducing false positives by 33% compared to single-model baselines.

    Built comprehensive MLOps infrastructure on GCP with Vertex AI for experiment tracking, model monitoring, and automated deployment pipelines. Features BigQuery ML integration for in-database inference, Cloud Storage model registry with semantic versioning, and SHAP-based explainability for root cause analysis. Engineered time-series preprocessing with rolling statistics (5min, 30min, 1hr windows), lag features, and sequence windowing. System monitors 12 critical sensors (pressure, temperature, vibration, flow rate, RPM) with projected $3.9M annual savings through 97% recall and reduced maintenance costs.`,
    icon: '/iot-sensor.svg',
    category: 'machine-learning',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Transformer', 'Isolation Forest', 'Vertex AI', 'BigQuery ML', 'GCP', 'SHAP', 'scikit-learn', 'MLOps', 'Stacking Ensemble'],
    metrics: {
      hours: '320+ Hours',
      models: '3-Model Ensemble',
      datasets: '12 Sensors @ 50K+ Readings'
    },
    links: {
      github: 'https://github.com/yourusername/fuel-pump-anomaly-detection'
    },
    featured: true,
    status: 'completed',
    completedDate: '2025-10-15'
  },
  {
    id: 'pump-power-consumption-analysis',
    title: 'Pump Power Consumption Analysis',
    description: 'AI-powered analysis platform for pump power consumption efficiency with natural language querying, automated data validation, and intelligent recommendations for operational optimization.',
    longDescription: `An interactive AI-powered analysis platform built to analyze pump power consumption data across multiple pipeline locations and operational conditions.

    The system features a natural language query interface allowing operators to request specific data ranges, locations, and sensor metrics without writing SQL. Implements automated data validation workflows with configurable rules for flowrates, temperature, pressure, and power consumption limits across different stations and pipeline segments.

    Built comprehensive analytics layer with AI-powered insights providing operational recommendations based on historical patterns and current conditions. Features interactive dashboards with Chart.js visualizations, automated report generation, and data export capabilities for stakeholder communication. The platform enables non-technical users to access and analyze complex sensor data through an intuitive conversational interface.`,
    icon: '/iot-sensor.svg',
    category: 'ai-automation',
    technologies: ['JavaScript', 'Chart.js', 'AI/LLM', 'Data Validation', 'Analytics', 'Natural Language Processing', 'HTML/CSS'],
    metrics: {
      hours: '120+ Hours',
      projects: 'Interactive Analytics',
      datasets: 'Multi-location Sensor Data'
    },
    links: {
      live: '/power_consumption.html'
    },
    featured: true,
    status: 'completed',
    completedDate: '2024-10-20'
  },
  {
    id: 'industrial-iot-sensor-intelligence',
    title: '50,000+ Daily Readings: Industrial IoT Sensor Intelligence',
    description: 'Intelligent sensor data transformation system processing 50,000+ daily readings, converting sparse exception-driven streams into continuous time-series datasets with 99.2% anomaly detection accuracy. Reduced false positive alerts by 65% while serving 15+ downstream analytics applications.',
    longDescription: `An intelligent transformation system built for Colonial Pipeline that processes industrial IoT sensor data at massive scale, converting exception-driven sensor streams into actionable continuous datasets for pipeline operations.

    The system implements statistical interpolation models and ARIMA-based gap-filling algorithms to create continuous time-series from sparse sensor data. Features isolation forests and Z-score analysis for automated outlier detection with business-context-aware thresholds that reduced false positive alerts by 65%.

    Built golden table architecture in BigQuery with automated validation workflows serving as authoritative data sources for 15+ downstream analytics applications. The platform enables real-time operational intelligence across critical pipeline infrastructure while maintaining strict PHMSA and DOT compliance requirements.`,
    icon: '/iot-sensor.svg',
    category: 'data-engineering',
    technologies: ['Python', 'BigQuery', 'ARIMA', 'Isolation Forest', 'SQL', 'GCP', 'Dataform', 'Time Series Analysis'],
    metrics: {
      hours: '320+ Hours',
      datasets: '50,000+ Daily Readings',
      projects: '15+ Downstream Apps'
    },
    links: {
      github: 'https://github.com/yourusername/iot-sensor-intelligence'
    },
    featured: true,
    status: 'completed',
    completedDate: '2024-03-15'
  },
  {
    id: 'multi-agent-dra-optimization',
    title: '$200K+ Annual Savings: Multi-Agent AI for Pipeline Optimization',
    description: 'Production multi-agent LLM architecture orchestrating specialized AI agents for drag-reducing agent optimization. Delivered $200K+ annual energy savings through natural language interface enabling non-technical users to optimize complex industrial operations.',
    longDescription: `A sophisticated multi-agent system deployed at Colonial Pipeline that orchestrates specialized expert agents to optimize drag-reducing agent (DRA) injection across pipeline operations.

    The architecture combines LangChain-powered statistical analysis agents, domain-specific blending operations expertise, and GPT-4 as the foundational reasoning engine. Implements RAG architecture with Vertex AI Vector Search for querying historical performance data and technical documentation.

    Built Flask/React web platform enabling natural language queries like "What's our optimal DRA concentration for Atlanta-Nashville segment in winter conditions?" The system features interactive filtering interfaces and automated efficiency recommendations that enabled the power consumption team to reduce energy costs by 8% ($200K+ annual savings) through optimized injection schedules while maintaining regulatory compliance.`,
    icon: '/multiagent-system.svg',
    category: 'ai-automation',
    technologies: ['Python', 'LangChain', 'GPT-4', 'Vertex AI Vector Search', 'Flask', 'React', 'RAG', 'BigQuery'],
    metrics: {
      hours: '280+ Hours',
      savings: '$200K+ Annual',
      projects: 'Multi-Agent Architecture'
    },
    links: {
      github: 'https://github.com/yourusername/multi-agent-optimization'
    },
    featured: true,
    status: 'completed',
    completedDate: '2024-02-20'
  },
  {
    id: 'genetic-algorithm-fuel-blending',
    title: 'Multi-Objective Fuel Blending Optimization Engine',
    description: 'Production genetic algorithm evolved from SQL prototype to extensible optimization engine with pluggable fitness functions, validated across 10,000+ scenarios for industrial fuel blending.',
    longDescription: `An enterprise-grade genetic algorithm system for fuel blending optimization at Colonial Pipeline, evolved from experimental SQL notebooks to production multi-objective optimization engine.

    Architected extensible OOP framework with pluggable fitness functions (cost minimization, environmental compliance, quality specifications), custom selection strategies (tournament, roulette wheel), and adaptive mutation operators balancing exploration vs exploitation.

    Built automated testing infrastructure for parameter space exploration using grid search and Bayesian optimization, validating algorithm performance across 10,000+ simulated blending scenarios. The system runs continuously in production, optimizing blending decisions while maintaining environmental compliance and quality standards, delivering measurable cost savings in industrial operations.`,
    icon: '/gasoline-blending.svg',
    category: 'machine-learning',
    technologies: ['Python', 'Genetic Algorithms', 'SQL', 'Bayesian Optimization', 'OOP', 'pytest', 'NumPy', 'Pandas'],
    metrics: {
      hours: '240+ Hours',
      scenarios: '10,000+ Validated',
      projects: 'Continuous Production'
    },
    links: {
      github: 'https://github.com/yourusername/genetic-fuel-blending'
    },
    featured: true,
    status: 'completed',
    completedDate: '2024-01-30'
  },
  {
    id: 'mlops-regulated-compliance',
    title: 'MLOps Infrastructure for Regulated Industries',
    description: 'Comprehensive MLOps platform with automated CI/CD, security scanning, and audit trails enabling compliant AI deployment in critical infrastructure under PHMSA and DOT oversight.',
    longDescription: `A production MLOps infrastructure built for Colonial Pipeline that enables machine learning deployment while maintaining strict regulatory compliance requirements for critical infrastructure.

    Orchestrated end-to-end pipelines on Vertex AI with GitHub Actions CI/CD implementing automated model training triggers, custom Docker containerization with Snyk security scanning, and staged deployment workflows (dev/staging/prod) with approval gates.

    Established comprehensive experiment tracking using MLflow for model versioning and complete audit trails, Weights & Biases for hyperparameter monitoring, and A/B testing framework with champion/challenger deployment patterns. The architecture enables reproducible AI development with automated performance monitoring and traffic splitting, reducing model deployment risk through systematic validation while maintaining PHMSA and DOT compliance.`,
    icon: '/mlops.svg',
    category: 'devops',
    technologies: ['Vertex AI', 'MLflow', 'Weights & Biases', 'Docker', 'GitHub Actions', 'Kubernetes', 'Snyk', 'Python'],
    metrics: {
      hours: '200+ Hours',
      models: '8+ Production Models',
      projects: 'Enterprise MLOps'
    },
    links: {
      github: 'https://github.com/yourusername/mlops-regulated'
    },
    featured: true,
    status: 'completed',
    completedDate: '2024-01-15'
  },
  {
    id: 'enterprise-demand-forecasting',
    title: '$1M Projected Annual Savings: Enterprise Demand Forecasting',
    description: 'Production forecasting system processing 50,000+ SKUs daily with ensemble LSTM/XGBoost/Prophet models. Delivered $1M projected annual savings through 40% stockout reduction and 25% excess inventory reduction, outperforming O9 Solutions baseline by 4% MAPE.',
    longDescription: `A comprehensive demand forecasting platform built at Gordon Food Service that combines neural networks with traditional time series methods for enterprise-scale predictions.

    Transformed experimental TensorFlow LSTM notebook into production system with custom architecture combining LSTM networks for temporal patterns, XGBoost for hierarchical feature importance, and residual connections with attention mechanisms achieving 12% accuracy improvement over baseline.

    Engineered advanced optimization using constraint programming (CP-SAT) for promotional scheduling, mixed-integer programming for inventory allocation, and stochastic gradient descent with custom loss functions. Achieved 4% MAPE improvement over O9 Solutions baseline through hyperparameter optimization with Optuna across 200+ trials. Validated through rigorous five-year historical backtesting, delivering projected $1M annual savings from 40% stockout reduction and 25% excess inventory reduction.`,
    icon: '/stockout.svg',
    category: 'machine-learning',
    technologies: ['TensorFlow', 'LSTM', 'XGBoost', 'Prophet', 'GreyKite', 'Vertex AI', 'Optuna', 'BigQuery', 'Python'],
    metrics: {
      hours: '400+ Hours',
      skus: '50,000+ Daily',
      savings: '$1M Projected Annual'
    },
    links: {
      github: 'https://github.com/yourusername/demand-forecasting'
    },
    featured: true,
    status: 'completed',
    completedDate: '2023-12-15'
  },
  {
    id: 'bigquery-cost-optimization',
    title: '$12K Monthly Savings: BigQuery Cost Optimization Framework',
    description: 'Strategic data architecture improvements reducing BigQuery costs by 10% ($12K monthly) through partitioning, clustering, and intelligent slot management on ML workloads. Enhanced model training efficiency by 25% while enabling data mesh principles across 8 domain teams.',
    longDescription: `A comprehensive cost optimization initiative at Gordon Food Service that reduced BigQuery spend by 10% ($12K monthly) through architectural improvements and query optimization strategies.

    Implemented date-based partitioning on 20+ core data science tables, multi-column clustering on high-cardinality dimensions, and slot reservation analysis identifying off-peak training opportunities. Enhanced model training efficiency by 25% through incremental feature computation, materialized feature stores with automated refresh schedules, and data access pattern optimization reducing network I/O by 60%.

    Designed data governance architecture using GCP Dataplex with hierarchical metadata tagging (domain, sensitivity, retention policy), establishing data mesh principles that enabled 8 domain teams to autonomously manage analytical datasets while maintaining centralized governance and discovery capabilities.`,
    icon: '/supply-chain.svg',
    category: 'data-engineering',
    technologies: ['BigQuery', 'SQL', 'GCP', 'Dataplex', 'Python', 'Data Mesh', 'Cost Optimization', 'Partitioning'],
    metrics: {
      hours: '150+ Hours',
      savings: '$12K Monthly',
      projects: '20+ Tables Optimized'
    },
    links: {
      github: 'https://github.com/yourusername/bigquery-optimization'
    },
    featured: false,
    status: 'completed',
    completedDate: '2023-11-20'
  },
  {
    id: 'pyspark-research-infrastructure',
    title: 'Scalable Research Data Infrastructure',
    description: 'PySpark ETL platform processing 10TB+ diverse datasets across 5 research projects, reducing data preparation time from weeks to hours with 95% uptime SLA.',
    longDescription: `A production-grade data infrastructure built at Vanderbilt University's ScopeLab supporting multiple concurrent AI research projects with scalable ETL pipelines and cloud compute.

    Architected PySpark frameworks processing 10TB+ of diverse datasets (academic performance, transportation logs, IoT sensors) with automated data validation, schema evolution handling, and incremental processing. Built reusable transformation templates (timestamp normalization, missing value imputation, outlier handling) accelerating research scientist productivity by 60%.

    Established comprehensive cloud infrastructure on AWS/GCP managing Jupyter Lab environments with custom ML kernels, auto-scaling GPU compute instances (P3/T4), and distributed Spark clusters. Maintained 95%+ uptime SLA through automated monitoring, backup strategies, and disaster recovery procedures, enabling uninterrupted machine learning experimentation for 5+ research scientists.`,
    icon: '/supply-chain.svg',
    category: 'data-engineering',
    technologies: ['PySpark', 'AWS', 'GCP', 'Jupyter', 'Apache Spark', 'Python', 'ETL', 'PostgreSQL'],
    metrics: {
      hours: '300+ Hours',
      data: '10TB+ Processed',
      projects: '5+ Research Projects'
    },
    links: {
      github: 'https://github.com/yourusername/research-infrastructure'
    },
    featured: false,
    status: 'completed',
    completedDate: '2022-08-30'
  },
  {
    id: 'transportation-ml-optimization',
    title: 'Real-time Transportation Optimization Platform',
    description: 'Full-stack shuttle optimization system with ML-based routing and predictive analytics, improving on-time performance by 25% and reducing wait times by 33%.',
    longDescription: `A comprehensive transportation optimization platform built at Vanderbilt University combining real-time tracking with machine learning for campus shuttle operations serving 50+ daily runs.

    Implemented genetic algorithms for dynamic route optimization and reinforcement learning for adaptive scheduling decisions. Built predictive analytics using historical ridership patterns and weather data, reducing average passenger wait times from 12 to 9 minutes (25% improvement) and operational costs by 18% through intelligent vehicle allocation.

    Developed full-stack application with Flask REST API backend using PostgreSQL, React frontend with WebSocket real-time updates for 30-second GPS tracking intervals, and mobile-responsive dispatcher interface enabling manual route adjustments. The platform improved on-time performance by 25% while providing complete operational visibility to dispatch teams.`,
    icon: '/transportation-optimization.svg',
    category: 'machine-learning',
    technologies: ['Python', 'Flask', 'React', 'PostgreSQL', 'WebSocket', 'Genetic Algorithms', 'Reinforcement Learning', 'GPS'],
    metrics: {
      hours: '220+ Hours',
      routes: '50+ Daily Operations',
      improvement: '25% On-time Performance'
    },
    links: {
      github: 'https://github.com/yourusername/shuttle-optimization'
    },
    featured: true,
    status: 'completed',
    completedDate: '2022-05-15'
  },
  {
    id: 'mobius-transportation-saas',
    title: 'Mobius.ai Transportation SaaS Platform',
    description: 'Complete transportation optimization platform as sole technical architect, processing 10TB+ data and serving 50+ daily users. Profitable and operational 5+ years.',
    longDescription: `A comprehensive transportation optimization SaaS platform where I served as founding engineer and sole technical architect from initial concept through production deployment and ongoing operations.

    Architected complete platform infrastructure: microservices with Docker/Kubernetes orchestration, data pipeline processing 10TB+ datasets (GPS traces, traffic patterns, rider behavior), ML operations with automated training/deployment, and full-stack web application serving 50+ daily active users.

    Built ML pipeline combining Prophet for demand forecasting, clustering algorithms for zone optimization, and vehicle routing algorithms reducing client operational costs by 30%. Established CI/CD pipelines with automated testing (unit, integration, end-to-end), staged deployments, and monitoring dashboards tracking system health and business metrics. Platform remains profitable and operational 5+ years later, serving multiple transportation providers across 3 states.`,
    icon: '/transportation-optimization.svg',
    category: 'ai-automation',
    technologies: ['Python', 'Docker', 'Kubernetes', 'Prophet', 'PostgreSQL', 'React', 'Flask', 'Redis', 'ML Pipeline'],
    metrics: {
      hours: '800+ Hours',
      data: '10TB+ Processed',
      users: '50+ Daily Active'
    },
    links: {
      github: 'https://github.com/yourusername/mobius-platform'
    },
    featured: true,
    status: 'completed',
    completedDate: '2021-06-30'
  },
  {
    id: 'rag-code-quality-platform',
    title: 'RAG-Based Code Quality Assurance Platform',
    description: 'Automated code review system using retrieval-augmented generation for Dataform SQLX and Python, reducing review cycle time by 40% with security vulnerability detection.',
    longDescription: `An intelligent code quality assurance platform built at Colonial Pipeline using RAG architecture to provide context-aware analysis of data engineering code.

    Implemented vector embeddings of organizational code patterns and best practices, enabling RAG-based querying of institutional knowledge. Built automated analysis for Dataform SQLX and Python applications with security vulnerability detection (SQL injection, credential exposure), style enforcement, and best practice recommendations.

    Features event-driven analysis triggering on Git commits, providing real-time feedback integrated with developer workflows. The system reduced code review cycle time by 40% while improving detection of security vulnerabilities and maintaining consistent code quality standards across data engineering teams. Developers receive immediate, actionable feedback rather than waiting for manual review cycles.`,
    icon: '/regulatory.svg',
    category: 'ai-automation',
    technologies: ['Python', 'LangChain', 'RAG', 'Vector Databases', 'Git', 'Dataform', 'Security Scanning', 'FastAPI'],
    metrics: {
      hours: '180+ Hours',
      improvement: '40% Faster Reviews',
      projects: 'Enterprise Code Quality'
    },
    links: {
      github: 'https://github.com/yourusername/rag-code-quality'
    },
    featured: false,
    status: 'completed',
    completedDate: '2024-02-10'
  },
  {
    id: 'ai-procurement-automation',
    title: '$150K+ Annual Savings: AI-Powered Procurement Automation',
    description: 'Google ADK agent system for intelligent vendor evaluation with automated SWOT analysis and technology stack alignment. Delivered $150K+ annual savings through optimized vendor selection, reducing evaluation time from weeks to days while improving decision quality.',
    longDescription: `An intelligent procurement automation platform built at Colonial Pipeline using Google ADK agents to evaluate vendor proposals and optimize selection decisions.

    Implemented multi-criteria analysis assessing technical fit, cost, security compliance, and integration effort. Features automated SWOT analysis generation, technology stack compatibility assessment against organizational standards, and cost-benefit analysis with AI-generated market intelligence.

    The system evaluates vendor proposals using scoring algorithms across multiple dimensions, providing contract negotiation insights and selection recommendations. Delivered $150K+ annual cost savings through optimized vendor selection, reduced evaluation time from weeks to days, and improved decision quality by ensuring consistent evaluation criteria across all procurement processes.`,
    icon: '/supply-chain.svg',
    category: 'ai-automation',
    technologies: ['Python', 'Google ADK', 'AI Agents', 'BigQuery', 'Cost Analysis', 'Automation', 'FastAPI'],
    metrics: {
      hours: '140+ Hours',
      savings: '$150K+ Annual',
      projects: 'Procurement Intelligence'
    },
    links: {
      github: 'https://github.com/yourusername/ai-procurement'
    },
    featured: false,
    status: 'completed',
    completedDate: '2024-01-25'
  },
  {
    id: 'model-evaluation-framework',
    title: 'Automated AI Model Evaluation Framework',
    description: 'Intelligent scoring and monitoring system for production ML models with BigQuery analytics, enabling continuous performance tracking and 25% cost optimization.',
    longDescription: `An automated model evaluation framework built at Colonial Pipeline that continuously monitors and optimizes production machine learning systems across multiple business units.

    Architected intelligent scoring agents assessing accuracy, latency, cost-per-prediction, and drift metrics across 8 production ML models. Built BigQuery-based analytics dashboard tracking performance trends and triggering automated retraining workflows when accuracy degrades beyond 3% threshold.

    Implemented comprehensive cost optimization analysis identifying opportunities through batch processing strategies, caching optimizations, and resource allocation improvements. The system reduced Vertex AI prediction costs by 25% while maintaining SLA requirements, enabling data-driven model improvement decisions and proactive performance management across the AI platform.`,
    icon: '/mlops.svg',
    category: 'machine-learning',
    technologies: ['Python', 'BigQuery', 'Vertex AI', 'MLflow', 'Monitoring', 'Cost Optimization', 'Analytics'],
    metrics: {
      hours: '120+ Hours',
      models: '8+ Production Models',
      savings: '25% Cost Reduction'
    },
    links: {
      github: 'https://github.com/yourusername/model-evaluation'
    },
    featured: false,
    status: 'completed',
    completedDate: '2024-03-01'
  }
]

export const getProjectsByCategory = (category?: string): Project[] => {
  if (!category) return projects
  return projects.filter(project => project.category === category)
}

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured)
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getCategories = (): string[] => {
  const categories = [...new Set(projects.map(project => project.category))]
  return categories.sort()
}