// Color palette
const colors = {
  // GCP Brand Colors
  gcpBlue: '#4285F4',
  gcpRed: '#EA4335',
  gcpYellow: '#FBBC04',
  gcpGreen: '#34A853',

  // Component Categories
  'data-source': '#5F6368',
  'preprocessing': '#1E88E5',
  'ml-model': '#8E24AA',
  'ensemble': '#D81B60',
  'gcp-service': '#4285F4',
  'edge': '#FB8C00',
  'feedback': '#00ACC1',
  'mlops': '#43A047',
  'monitoring': '#F4B400',
  'ui': '#00ACC1',
  'storage': '#5F6368',
  'inference': '#1E88E5',
  'decision': '#D81B60',
  'tracking': '#34A853',

  // Status Colors
  active: '#0F9D58',
  warning: '#F4B400',
  critical: '#DB4437',

  // UI Elements
  background: '#FFFFFF',
  border: '#DADCE0',
  text: '#202124',
  textSecondary: '#5F6368'
};

// Architecture data structure
const architectureData = {
  layers: [
    {
      id: "layer-1-ingestion",
      name: "Layer 1: Data Ingestion & Edge",
      y: 0,
      height: 140,
      components: [
        {
          id: "pump-sensors",
          name: "Pump Sensors",
          type: "data-source",
          x: 50,
          width: 180,
          height: 100,
          metrics: {
            "Sensors": "12 per pump",
            "Sampling": "1-minute intervals",
            "Location": "Atlanta facility"
          },
          description: "Physical IoT sensors monitoring pressure, temperature, and vibration on Pumps A1, B2, C3",
          codeRef: "src/data/sensor_config.py"
        },
        {
          id: "edge-gateway",
          name: "Edge Gateway (RPi)",
          type: "edge",
          x: 250,
          width: 180,
          height: 100,
          status: "future",
          metrics: {
            "Latency": "<50ms (target)",
            "Model": "TFLite",
            "Memory": "<100 MB"
          },
          description: "Future: Raspberry Pi 4 for edge ML inference and offline anomaly detection",
          codeRef: "roadmap/edge_deployment.md"
        },
        {
          id: "mqtt-broker",
          name: "MQTT Broker",
          type: "gcp-service",
          x: 450,
          width: 150,
          height: 100,
          metrics: {
            "Protocol": "MQTT 3.1.1",
            "QoS": "Level 1",
            "Topics": "pump/{id}/metrics"
          },
          description: "MQTT message broker for sensor pub/sub messaging"
        },
        {
          id: "bigquery-historical",
          name: "BigQuery Warehouse",
          type: "data-source",
          x: 620,
          width: 180,
          height: 100,
          metrics: {
            "Dataset": "fuel_sensor_data",
            "Table": "pump_readings_atlanta",
            "Lookback": "30 days"
          },
          description: "Historical time-series data storage for training and analytics",
          codeRef: "src/data/bigquery_client.py"
        }
      ]
    },
    {
      id: "layer-2-preprocessing",
      name: "Layer 2: Data Validation & Preprocessing",
      y: 160,
      height: 140,
      components: [
        {
          id: "data-quality",
          name: "Data Quality Analyzer",
          type: "preprocessing",
          x: 50,
          width: 220,
          height: 100,
          metrics: {
            "Outliers": "IQR + Z-score",
            "Missing": "MICE imputation",
            "Validation": "Schema + range"
          },
          description: "Data preprocessing and quality analysis pipeline",
          codeRef: "src/data/data_quality.py",
          features: [
            "Outlier detection (IQR, Z-score, Isolation Forest)",
            "Missing value imputation (MICE, forward-fill)",
            "Range validation (domain-specific bounds)",
            "Normalization and scaling",
            "Duplicate detection and removal"
          ]
        },
        {
          id: "feature-engineering",
          name: "Feature Engineering",
          type: "preprocessing",
          x: 290,
          width: 240,
          height: 100,
          metrics: {
            "Windows": "5min, 30min, 1hr",
            "Lag Features": "t-1, t-5, t-10",
            "Output": "40+ features"
          },
          description: "Time-series feature extraction: rolling windows, lags, normalization",
          codeRef: "src/data/data_preprocessing.py"
        }
      ]
    },
    {
      id: "layer-3-models",
      name: "Layer 3: ML Model Training",
      y: 320,
      height: 180,
      components: [
        {
          id: "lstm-ae",
          name: "LSTM Autoencoder",
          type: "ml-model",
          x: 50,
          width: 200,
          height: 140,
          status: "production",
          metrics: {
            "F1-Score": "0.89",
            "Training": "25 minutes",
            "Use Case": "Temporal patterns"
          },
          architecture: {
            "Encoder": "128 → 64 → 32",
            "Decoder": "32 → 64 → 128",
            "Sequence": "24 steps",
            "Dropout": "0.2"
          },
          description: "Unsupervised reconstruction-based anomaly detection using LSTM networks",
          codeRef: "src/models/lstm_autoencoder.py"
        },
        {
          id: "isolation-forest",
          name: "Isolation Forest",
          type: "ml-model",
          x: 270,
          width: 200,
          height: 140,
          status: "production",
          metrics: {
            "F1-Score": "0.94",
            "Training": "35 seconds",
            "Use Case": "Point anomalies"
          },
          hyperparameters: {
            "n_estimators": "100",
            "max_samples": "256",
            "contamination": "0.1"
          },
          description: "Unsupervised ensemble-based outlier detection for point anomalies",
          codeRef: "src/models/isolation_forest.py"
        },
        {
          id: "transformer",
          name: "Transformer Detector",
          type: "ml-model",
          x: 490,
          width: 200,
          height: 140,
          status: "pending-labels",
          metrics: {
            "F1-Score": "0.91 (sim)",
            "Training": "2.1 hours",
            "Use Case": "Correlations"
          },
          architecture: {
            "d_model": "128",
            "Heads": "8",
            "Layers": "2",
            "FFN": "128→512→128"
          },
          description: "Supervised multi-head attention anomaly classifier (pending labeled data)",
          codeRef: "src/models/transformer_anomaly.py"
        }
      ]
    },
    {
      id: "layer-4-ensemble",
      name: "Layer 4: Ensemble & Decision",
      y: 520,
      height: 140,
      components: [
        {
          id: "ensemble",
          name: "Hybrid Ensemble",
          type: "ensemble",
          x: 150,
          width: 280,
          height: 100,
          status: "production",
          metrics: {
            "F1-Score": "0.96",
            "False Positives": "12/day",
            "Method": "Stacking (LogReg)"
          },
          subcomponents: [
            "Weighted Averaging (F1=0.93)",
            "Stacking Meta-Learner (F1=0.96)"
          ],
          description: "Logistic regression meta-learner combines LSTM, IForest, and Transformer predictions",
          codeRef: "src/models/hybrid_ensemble.py"
        },
        {
          id: "adaptive-threshold",
          name: "Adaptive Thresholds",
          type: "decision",
          x: 450,
          width: 220,
          height: 100,
          metrics: {
            "Pressure": "0.80 base",
            "Vibration": "0.85 base",
            "Auto-tuning": "Weekly"
          },
          description: "Sensor-specific, time-aware thresholds with operator feedback integration",
          codeRef: "src/models/adaptive_thresholds.py"
        }
      ]
    },
    {
      id: "layer-5-inference",
      name: "Layer 5: Real-Time Inference",
      y: 680,
      height: 130,
      components: [
        {
          id: "dataflow-pipeline",
          name: "Dataflow Streaming",
          type: "gcp-service",
          x: 50,
          width: 200,
          height: 90,
          status: "production",
          metrics: {
            "Latency": "<5 seconds",
            "Workers": "Auto 1-10",
            "Windows": "5-min sliding"
          },
          description: "Apache Beam pipeline on Dataflow for real-time processing",
          codeRef: "src/deployment/streaming_pipeline.py:330"
        },
        {
          id: "anomaly-detector",
          name: "Anomaly Detector DoFn",
          type: "inference",
          x: 270,
          width: 180,
          height: 90,
          metrics: {
            "Model": "From GCS",
            "Inference": "Per-sample"
          },
          description: "Loads ensemble model and runs real-time predictions",
          codeRef: "src/deployment/anomaly_detector.py"
        },
        {
          id: "alert-formatter",
          name: "Alert Formatter",
          type: "decision",
          x: 470,
          width: 180,
          height: 90,
          metrics: {
            "Severity": "CRITICAL/HIGH/MED",
            "Recommendations": "Sensor-specific"
          },
          description: "Classifies alerts and generates action recommendations"
        },
        {
          id: "pubsub-alerts",
          name: "Alert Topic",
          type: "gcp-service",
          x: 670,
          width: 130,
          height: 90,
          description: "Output queue for anomaly alerts"
        }
      ]
    },
    {
      id: "layer-6-mlops",
      name: "Layer 6: MLOps Automation",
      y: 830,
      height: 130,
      components: [
        {
          id: "retraining-pipeline",
          name: "Vertex AI Retraining",
          type: "mlops",
          x: 50,
          width: 220,
          height: 90,
          status: "scheduled",
          metrics: {
            "Schedule": "Weekly Sunday 2AM",
            "Trigger": "Drift detected",
            "Deploy": "F1 > +2%"
          },
          description: "Automated model retraining with conditional deployment",
          codeRef: "src/deployment/automated_retraining.py"
        },
        {
          id: "drift-detector",
          name: "Drift Detector",
          type: "monitoring",
          x: 290,
          width: 180,
          height: 90,
          metrics: {
            "Method": "Kolmogorov-Smirnov",
            "Threshold": "p < 0.05"
          },
          description: "Detects data drift vs. reference distribution"
        },
        {
          id: "model-registry",
          name: "Model Registry (GCS)",
          type: "storage",
          x: 490,
          width: 180,
          height: 90,
          metrics: {
            "Versions": "v1.0.0, v1.1.0, v1.2.0",
            "Rollback": "Enabled"
          },
          description: "Versioned storage for trained models"
        },
        {
          id: "vertex-experiments",
          name: "Vertex AI Experiments",
          type: "tracking",
          x: 690,
          width: 160,
          height: 90,
          metrics: {
            "Experiments": "50+ logged",
            "Tracking": "Hyperparams + metrics"
          },
          description: "Experiment tracking and comparison"
        }
      ]
    },
    {
      id: "layer-7-feedback",
      name: "Layer 7: Operator Feedback & Monitoring",
      y: 980,
      height: 130,
      components: [
        {
          id: "monitoring-dashboard",
          name: "Monitoring Dashboard",
          type: "ui",
          x: 50,
          width: 200,
          height: 90,
          metrics: {
            "Refresh": "Real-time",
            "Metrics": "P, R, F1"
          },
          description: "Grafana dashboard with alerts and sensor health"
        },
        {
          id: "operator-feedback",
          name: "Operator Feedback API",
          type: "feedback",
          x: 270,
          width: 220,
          height: 90,
          status: "production",
          metrics: {
            "Endpoints": "4 REST APIs",
            "Storage": "BigQuery"
          },
          description: "Flask API for operator corrections: false positives, missed anomalies, confirmations",
          codeRef: "src/deployment/operator_feedback.py"
        },
        {
          id: "bigquery-feedback",
          name: "Feedback Table",
          type: "storage",
          x: 510,
          width: 180,
          height: 90,
          metrics: {
            "Schema": "feedback_id, alert_id",
            "Labels": "anomaly_type, confidence"
          },
          description: "Labeled dataset for supervised retraining"
        }
      ]
    }
  ],

  flows: [
    // Layer 1 flows - MQTT pub/sub to BigQuery
    { from: "pump-sensors", to: "mqtt-broker", type: "real-time", label: "MQTT Publish" },
    { from: "pump-sensors", to: "edge-gateway", type: "future", label: "Local (Future)" },
    { from: "edge-gateway", to: "mqtt-broker", type: "future", label: "Sync (Future)" },
    { from: "mqtt-broker", to: "bigquery-historical", type: "streaming", label: "Subscribe & Store" },

    // Layer 2 flows
    { from: "mqtt-broker", to: "data-quality", type: "streaming", label: "Stream" },
    { from: "bigquery-historical", to: "feature-engineering", type: "batch", label: "Training data" },
    { from: "data-quality", to: "feature-engineering", type: "real-time", label: "Clean" },

    // Layer 3 flows
    { from: "feature-engineering", to: "lstm-ae", type: "training", label: "24-step seq" },
    { from: "feature-engineering", to: "isolation-forest", type: "training", label: "Vectors" },
    { from: "feature-engineering", to: "transformer", type: "training", label: "Seq + labels" },

    // Layer 4 flows
    { from: "lstm-ae", to: "ensemble", type: "prediction", label: "Recon error" },
    { from: "isolation-forest", to: "ensemble", type: "prediction", label: "Score" },
    { from: "transformer", to: "ensemble", type: "prediction", label: "Binary" },
    { from: "ensemble", to: "adaptive-threshold", type: "scoring", label: "Score" },

    // Layer 5 flows
    { from: "mqtt-broker", to: "dataflow-pipeline", type: "streaming", label: "Stream" },
    { from: "dataflow-pipeline", to: "anomaly-detector", type: "real-time", label: "Features" },
    { from: "anomaly-detector", to: "alert-formatter", type: "real-time", label: "Predictions" },
    { from: "adaptive-threshold", to: "alert-formatter", type: "decision", label: "Threshold" },
    { from: "alert-formatter", to: "pubsub-alerts", type: "streaming", label: "Alerts" },

    // Layer 6 flows
    { from: "bigquery-historical", to: "retraining-pipeline", type: "batch", label: "30 days" },
    { from: "bigquery-historical", to: "drift-detector", type: "batch", label: "Compare" },
    { from: "drift-detector", to: "retraining-pipeline", type: "trigger", label: "Trigger" },
    { from: "retraining-pipeline", to: "model-registry", type: "deployment", label: "Deploy" },
    { from: "retraining-pipeline", to: "vertex-experiments", type: "logging", label: "Log" },
    { from: "model-registry", to: "dataflow-pipeline", type: "loading", label: "Load" },
    { from: "model-registry", to: "edge-gateway", type: "future", label: "TFLite (Future)" },

    // Layer 7 flows
    { from: "pubsub-alerts", to: "monitoring-dashboard", type: "real-time", label: "Display" },
    { from: "monitoring-dashboard", to: "operator-feedback", type: "user-action", label: "Corrections" },
    { from: "operator-feedback", to: "bigquery-feedback", type: "storage", label: "Store" },
    { from: "bigquery-feedback", to: "retraining-pipeline", type: "batch", label: "Labels" },
    { from: "bigquery-feedback", to: "adaptive-threshold", type: "tuning", label: "Tune" }
  ]
};

// Global variables
let svg, g, zoom, tooltip, modal;
let animationRunning = true;
let currentTransform = d3.zoomIdentity;

// Initialize diagram
function init() {
  document.getElementById('loading').style.display = 'none';

  const container = document.getElementById('architecture-diagram');
  const width = 900;
  const height = 1200;

  // Create SVG
  svg = d3.select("#architecture-diagram")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("preserveAspectRatio", "xMidYMid meet");

  // Create main group
  g = svg.append("g");

  // Add zoom behavior
  zoom = d3.zoom()
    .scaleExtent([0.3, 3])
    .on("zoom", (event) => {
      currentTransform = event.transform;
      g.attr("transform", event.transform);
    });

  svg.call(zoom);

  // Create tooltip
  tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip");

  // Define arrow markers
  const defs = svg.append("defs");

  ['real-time', 'batch', 'streaming', 'prediction', 'training', 'scoring',
   'decision', 'deployment', 'loading', 'logging', 'storage', 'trigger',
   'tuning', 'user-action', 'optional', 'sync', 'future'].forEach(type => {
    defs.append("marker")
      .attr("id", `arrow-${type}`)
      .attr("markerWidth", 10)
      .attr("markerHeight", 10)
      .attr("refX", 9)
      .attr("refY", 3)
      .attr("orient", "auto")
      .append("polygon")
      .attr("points", "0 0, 10 3, 0 6")
      .style("fill", type === 'future' ? '#9E9E9E' : (type === 'batch' ? colors['ml-model'] : colors.gcpBlue))
      .style("opacity", type === 'future' ? 0.4 : 1);
  });

  // Render diagram
  renderDiagram();

  // Start animations
  if (animationRunning) {
    startAnimations();
  }
}

// Render the entire diagram
function renderDiagram() {
  // Render layers
  architectureData.layers.forEach(layer => {
    renderLayer(layer);
  });

  // Flows removed - no arrows displayed
}

// Render a layer
function renderLayer(layer) {
  const uniformLayerHeight = 140; // Uniform height for all layers

  const layerGroup = g.append("g")
    .attr("class", `layer layer-${layer.id}`)
    .attr("transform", `translate(0, ${layer.y})`);

  // Layer background
  layerGroup.append("rect")
    .attr("class", "layer-background")
    .attr("x", 20)
    .attr("y", 0)
    .attr("width", 860)
    .attr("height", uniformLayerHeight)
    .attr("rx", 8);

  // Layer title
  layerGroup.append("text")
    .attr("class", "layer-label")
    .attr("x", 30)
    .attr("y", 20)
    .text(layer.name);

  // Calculate equal spacing and uniform size for components
  const numComponents = layer.components.length;
  const layerWidth = 860;
  const layerStartX = 20; // Layer background starts at x=20
  const componentWidth = 180; // Uniform width for all components
  const componentHeight = 90; // Uniform height for all components
  const topPadding = 35; // Space for title plus margin
  const bottomPadding = 15; // Bottom margin
  const totalComponentsWidth = numComponents * componentWidth;
  const totalSpacing = layerWidth - totalComponentsWidth;
  const sidePadding = totalSpacing / (numComponents + 1);

  // Render components with calculated positions
  layer.components.forEach((component, index) => {
    const calculatedX = layerStartX + sidePadding + (sidePadding + componentWidth) * index;
    const componentWithPosition = {
      ...component,
      x: calculatedX,
      y: topPadding, // Position components below title with padding
      width: componentWidth,
      height: componentHeight
    };
    renderComponent(layerGroup, componentWithPosition, layer.y);
  });
}

// Render a component
function renderComponent(layerGroup, component, layerY) {
  const componentY = component.y || 30; // Use component's y position or default to 30
  const group = layerGroup.append("g")
    .attr("class", `component component-${component.id}`)
    .attr("transform", `translate(${component.x}, ${componentY})`)
    .attr("data-id", component.id)
    .attr("data-y", layerY + componentY)
    .on("mouseenter", function(event) {
      showTooltip(component, event);
    })
    .on("mouseleave", function() {
      hideTooltip();
    })
    .on("click", function() {
      showModal(component);
    });

  // Component box
  group.append("rect")
    .attr("class", "component-box")
    .attr("width", component.width)
    .attr("height", component.height)
    .attr("rx", 6)
    .attr("fill", "white")
    .attr("stroke", colors[component.type] || colors.gcpBlue)
    .attr("stroke-width", 2);

  // Icon circle (placeholder)
  group.append("circle")
    .attr("cx", 20)
    .attr("cy", 20)
    .attr("r", 12)
    .attr("fill", colors[component.type] || colors.gcpBlue);

  // Icon text
  group.append("text")
    .attr("x", 20)
    .attr("y", 24)
    .attr("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("fill", "white")
    .attr("font-weight", "bold")
    .text(component.name.charAt(0));

  // Component name
  group.append("text")
    .attr("class", "component-name")
    .attr("x", 40)
    .attr("y", 20)
    .text(component.name);

  // Metrics
  if (component.metrics) {
    let yOffset = 45;
    Object.entries(component.metrics).slice(0, 3).forEach(([key, value]) => {
      group.append("text")
        .attr("class", "component-metric")
        .attr("x", 10)
        .attr("y", yOffset)
        .text(`${key}: ${value}`);
      yOffset += 15;
    });
  }
}

// Render a flow connection
function renderFlow(flow) {
  const source = findComponentPosition(flow.from);
  const target = findComponentPosition(flow.to);

  if (!source || !target) return;

  const flowGroup = g.append("g")
    .attr("class", `flow flow-${flow.type}`);

  // Calculate path
  const path = flowGroup.append("path")
    .attr("class", `flow-arrow ${flow.type}`)
    .attr("d", generatePath(source, target))
    .attr("marker-end", `url(#arrow-${flow.type})`)
    .attr("stroke-dasharray", flow.type === 'batch' || flow.type === 'optional' || flow.type === 'future' ? "5,5" : null)
    .attr("stroke", flow.type === 'future' ? '#9E9E9E' : null)
    .attr("opacity", flow.type === 'future' ? 0.4 : null);

  // Flow label
  if (flow.label) {
    const midpoint = {
      x: (source.x + target.x) / 2,
      y: (source.y + target.y) / 2
    };

    flowGroup.append("text")
      .attr("class", "flow-label")
      .attr("x", midpoint.x)
      .attr("y", midpoint.y - 5)
      .attr("text-anchor", "middle")
      .text(flow.label);
  }
}

// Generate curved path between components
function generatePath(source, target) {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const dr = Math.sqrt(dx * dx + dy * dy) * 0.5;

  // Use cubic bezier for smoother curves
  const midX = (source.x + target.x) / 2;
  const midY = (source.y + target.y) / 2;

  return `M ${source.x},${source.y} Q ${midX},${source.y} ${midX},${midY} T ${target.x},${target.y}`;
}

// Find component position
function findComponentPosition(componentId) {
  const component = g.select(`.component-${componentId}`);
  if (component.empty()) return null;

  const transform = component.attr("transform");
  const match = transform.match(/translate\(([^,]+),([^)]+)\)/);
  if (!match) return null;

  const x = parseFloat(match[1]);
  const layerY = parseFloat(component.attr("data-y"));

  // Get component dimensions
  const box = component.select(".component-box");
  const width = parseFloat(box.attr("width"));
  const height = parseFloat(box.attr("height"));

  return {
    x: x + width / 2,
    y: layerY + height / 2
  };
}

// Show tooltip
function showTooltip(component, event) {
  let html = `<div class="tooltip-title">${component.name}</div>`;
  html += `<div class="tooltip-description">${component.description}</div>`;

  if (component.metrics) {
    html += '<div class="tooltip-metrics">';
    Object.entries(component.metrics).forEach(([key, value]) => {
      html += `<span class="key">${key}:</span><span class="value">${value}</span>`;
    });
    html += '</div>';
  }

  if (component.codeRef) {
    html += `<div class="tooltip-code-ref">📄 ${component.codeRef}</div>`;
  }

  tooltip.html(html)
    .style("left", (event.pageX + 15) + "px")
    .style("top", (event.pageY - 10) + "px")
    .classed("visible", true);
}

// Hide tooltip
function hideTooltip() {
  tooltip.classed("visible", false);
}

// Show modal with component details
function showModal(component) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  let html = `<div class="modal-header">${component.name}</div>`;
  html += `<div class="modal-section">`;
  html += `<div class="modal-section-title">Description</div>`;
  html += `<p>${component.description}</p>`;
  html += `</div>`;

  if (component.metrics) {
    html += `<div class="modal-section">`;
    html += `<div class="modal-section-title">Metrics</div>`;
    html += '<ul>';
    Object.entries(component.metrics).forEach(([key, value]) => {
      html += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    html += '</ul></div>';
  }

  if (component.architecture) {
    html += `<div class="modal-section">`;
    html += `<div class="modal-section-title">Architecture</div>`;
    html += '<ul>';
    Object.entries(component.architecture).forEach(([key, value]) => {
      html += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    html += '</ul></div>';
  }

  if (component.hyperparameters) {
    html += `<div class="modal-section">`;
    html += `<div class="modal-section-title">Hyperparameters</div>`;
    html += '<ul>';
    Object.entries(component.hyperparameters).forEach(([key, value]) => {
      html += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    html += '</ul></div>';
  }

  if (component.features) {
    html += `<div class="modal-section">`;
    html += `<div class="modal-section-title">Features</div>`;
    html += '<ul>';
    component.features.forEach(feature => {
      html += `<li>${feature}</li>`;
    });
    html += '</ul></div>';
  }

  if (component.codeRef) {
    html += `<div class="modal-section">`;
    html += `<div class="modal-section-title">Code Reference</div>`;
    html += `<code>${component.codeRef}</code>`;
    html += `</div>`;
  }

  modalBody.innerHTML = html;
  modal.classList.add('visible');
}

// Close modal
function closeModal() {
  document.getElementById('modal').classList.remove('visible');
}

// Start animations
function startAnimations() {
  setInterval(() => {
    if (!animationRunning) return;

    architectureData.flows.forEach((flow, i) => {
      setTimeout(() => animateFlow(flow), i * 300);
    });
  }, 10000);
}

// Animate a single flow
function animateFlow(flow) {
  const source = findComponentPosition(flow.from);
  const target = findComponentPosition(flow.to);

  if (!source || !target) return;

  const path = g.select(`.flow-${flow.type}`);
  if (path.empty()) return;

  const dot = g.append("circle")
    .attr("class", "flow-dot")
    .attr("r", 4)
    .attr("cx", source.x)
    .attr("cy", source.y)
    .attr("opacity", 0);

  dot.transition()
    .duration(2000)
    .ease(d3.easeLinear)
    .attr("opacity", 1)
    .attr("cx", target.x)
    .attr("cy", target.y)
    .on("end", function() {
      d3.select(this).remove();
    });
}

// Reset zoom
function resetZoom() {
  svg.transition()
    .duration(750)
    .call(zoom.transform, d3.zoomIdentity);
}

// Toggle animation
function toggleAnimation() {
  animationRunning = !animationRunning;
  const btn = event.target.closest('.btn');
  btn.querySelector('span').textContent = animationRunning ? '⏸' : '▶';
}

// Toggle metrics callout
function toggleMetrics() {
  const callout = document.getElementById('metrics-callout');
  callout.style.display = callout.style.display === 'none' ? 'block' : 'none';
}

// Export to SVG
function exportSVG() {
  const svgElement = document.querySelector('#architecture-diagram svg');
  const serializer = new XMLSerializer();
  let svgString = serializer.serializeToString(svgElement);

  // Add XML declaration
  svgString = '<?xml version="1.0" standalone="no"?>\r\n' + svgString;

  const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'fuel-pump-architecture.svg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Export to PNG
function exportPNG() {
  const svgElement = document.querySelector('#architecture-diagram svg');
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svgElement);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  canvas.width = 1800;
  canvas.height = 2400;

  img.onload = function() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    canvas.toBlob(function(blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'fuel-pump-architecture.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  };

  img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);
