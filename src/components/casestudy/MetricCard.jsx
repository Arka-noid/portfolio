export default function MetricCard({ value, unit, label }) {
  return (
    <div className="cs-metric reveal">
      <div className="cs-metric-value">
        {value}<span>{unit}</span>
      </div>
      <div className="cs-metric-label">{label}</div>
    </div>
  );
}
