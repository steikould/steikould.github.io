# Fuel Pump Anomaly Detection - Interactive Architecture Diagram

## Overview

This is an interactive D3.js visualization of the complete MLOps architecture for the Fuel Pump Anomaly Detection system deployed at the Atlanta blending facility.

## Features

### Interactive Elements

- **Hover Tooltips**: Hover over any component to see detailed metrics, descriptions, and code references
- **Click for Details**: Click any component to open a modal with comprehensive information including:
  - Architecture details
  - Hyperparameters
  - Features and capabilities
  - Code references
- **Zoom & Pan**: Use mouse wheel to zoom, click and drag to pan around the diagram
- **Animated Data Flow**: Watch animated dots flow through the system showing real-time data paths

### Controls

- **Reset View**: Returns diagram to original zoom/pan position
- **Toggle Animation**: Start/stop the animated data flow
- **Export SVG**: Download the diagram as a vector SVG file
- **Export PNG**: Download the diagram as a high-resolution PNG image
- **Toggle Metrics**: Show/hide the performance metrics callout

### Architecture Layers

The diagram visualizes 7 distinct layers:

1. **Data Ingestion & Edge**: Physical sensors, IoT gateways, PubSub, BigQuery
2. **Data Validation & Preprocessing**: Sensor health monitoring, feature engineering
3. **ML Model Training**: LSTM Autoencoder, Isolation Forest, Transformer
4. **Ensemble & Decision**: Hybrid ensemble (stacking), adaptive thresholds
5. **Real-Time Inference**: Dataflow streaming, anomaly detection, alerts
6. **MLOps Automation**: Vertex AI retraining, drift detection, model registry
7. **Operator Feedback & Monitoring**: Dashboard, feedback API, labeled dataset

### Data Flow Types

- **Solid Blue Lines**: Real-time streaming data
- **Dashed Purple Lines**: Batch processing
- **Cyan Lines**: Feedback loops
- **Orange Lines**: Edge device sync

### Component Types (Color-Coded)

- **Blue**: GCP Services (PubSub, BigQuery, Dataflow, Vertex AI)
- **Purple**: ML Models (LSTM, Isolation Forest, Transformer)
- **Orange**: Edge Devices (Raspberry Pi)
- **Cyan**: Feedback Systems
- **Green**: MLOps & Tracking

## Usage

### Viewing Locally

1. Open the file directly in a web browser:
   ```
   file:///path/to/fuel-pump-architecture.html
   ```

2. Or serve via a local web server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (http-server)
   npx http-server
   ```
   Then navigate to: `http://localhost:8000/fuel-pump-architecture.html`

### Embedding in Documentation

#### As an iframe
```html
<iframe
  src="fuel-pump-architecture.html"
  width="100%"
  height="800px"
  frameborder="0">
</iframe>
```

#### In Next.js Blog Posts
```tsx
// In your MDX or blog post component
<div className="architecture-diagram">
  <iframe
    src="/fuel-pump-architecture.html"
    style={{ width: '100%', height: '800px', border: 'none' }}
    title="Fuel Pump Architecture"
  />
</div>
```

### Exporting for Presentations

1. **SVG Export**: Best for editing in Illustrator/Inkscape, scalable for any size
2. **PNG Export**: Best for PowerPoint/Google Slides, high resolution (1800x2400)

## Performance Metrics

The diagram displays key system metrics:

- **Latency**: <5 seconds end-to-end
- **F1-Score**: 0.96 (ensemble model)
- **False Positives**: 12 per day
- **Cost**: $200/month (GCP infrastructure)
- **Uptime**: 99.9%

## Technical Details

### Components Highlighted

Each component shows:
- **Name**: Component identifier
- **Status Badge**: Production/Pending/Scheduled/Optional
- **Key Metrics**: Top 3 performance indicators
- **Description**: Functional purpose
- **Code Reference**: Link to implementation file

### Data Flows

The diagram shows 30+ data flow connections including:
- Real-time sensor streaming
- Batch training pipelines
- Model deployment paths
- Operator feedback loops
- Automated retraining triggers

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ⚠️ Limited (zoom/pan may be challenging on small screens)

## Responsive Design

- **Desktop (1920px+)**: Full diagram with all features
- **Tablet (768px+)**: Adjusted layout, minimap hidden
- **Mobile (<768px)**: Metrics and legend repositioned

## Customization

### Modifying Colors

Edit the `colors` object in `fuel-pump-architecture.js`:

```javascript
const colors = {
  'ml-model': '#8E24AA',  // Purple for ML models
  'gcp-service': '#4285F4', // Blue for GCP services
  // ... etc
};
```

### Adding Components

Add to the `architectureData.layers` array:

```javascript
{
  id: "new-component",
  name: "New Component",
  type: "ml-model",
  x: 100,
  width: 200,
  height: 100,
  metrics: { "Metric": "Value" },
  description: "Description here"
}
```

### Adding Data Flows

Add to the `architectureData.flows` array:

```javascript
{
  from: "source-id",
  to: "target-id",
  type: "real-time",
  label: "Flow label"
}
```

## Files

- `fuel-pump-architecture.html`: Main HTML file with embedded styles
- `fuel-pump-architecture.js`: D3.js visualization logic and data
- `ARCHITECTURE_DIAGRAM_README.md`: This documentation file

## Integration with Portfolio

To integrate with your Next.js portfolio:

1. **Direct Link**: Add a link from your blog post to the standalone HTML
2. **Iframe Embed**: Embed within a blog post using an iframe
3. **React Component**: Convert to a React/D3 component for tighter integration

### Example Blog Integration

```tsx
// In your blog post MDX file
import ArchitectureDiagram from '@/components/diagrams/ArchitectureDiagram'

<ArchitectureDiagram
  title="Fuel Pump Anomaly Detection Architecture"
  fullscreenLink="/fuel-pump-architecture.html"
/>
```

## Future Enhancements

- [ ] Add search/filter for specific components
- [ ] Highlight critical path on demand
- [ ] Toggle between different views (simplified/detailed)
- [ ] Add time-series view of system metrics
- [ ] Export to PDF with annotations
- [ ] Dark mode support
- [ ] Multi-language support

## Support

For questions or issues with the diagram, refer to the main project documentation or open an issue in the repository.

## License

This visualization is part of the Fuel Pump Anomaly Detection project portfolio.
