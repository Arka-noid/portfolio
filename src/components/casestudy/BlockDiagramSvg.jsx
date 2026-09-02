// Generic left-to-right block diagram used by case studies to show an
// end-to-end signal chain. `blocks` follow the shape
// { x, w, label ("LINE1\nLINE2"), sub, color }; `domain` optionally draws
// a dashed boundary box: { x, width, label }.
export default function BlockDiagramSvg({ blocks, domain, viewWidth = 680, viewHeight = 140 }) {
  return (
    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="cs-arch-svg" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`Signal chain: ${blocks.map((b) => b.label.replace("\n", " ")).join(", then ")}`}>
      {blocks.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x + 5} y="20" width={b.w - 10} height="80" rx="2"
            fill={b.color === "#00C8FF" ? "rgba(0,200,255,0.06)" : "rgba(232,237,245,0.04)"}
            stroke={b.color} strokeWidth="0.8" opacity="0.8"
          />
          {b.label.split("\n").map((line, li) => (
            <text
              key={li}
              x={b.x + b.w / 2}
              y={48 + li * 14}
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="8"
              fontWeight="600"
              fill={b.color}
              opacity="0.8"
              letterSpacing="0.1em"
            >
              {line}
            </text>
          ))}
          <text
            x={b.x + b.w / 2} y="88"
            textAnchor="middle"
            fontFamily="IBM Plex Mono, monospace" fontSize="6"
            fill={b.color} opacity="0.4"
          >
            {b.sub}
          </text>
          {i < blocks.length - 1 && (
            <line
              x1={b.x + b.w - 3} y1="60"
              x2={blocks[i + 1].x + 7} y2="60"
              stroke={b.color} strokeWidth="1" opacity="0.3"
            />
          )}
          {i < blocks.length - 1 && (
            <polygon
              points={`${blocks[i + 1].x + 3},56 ${blocks[i + 1].x + 3},64 ${blocks[i + 1].x + 8},60`}
              fill={b.color} opacity="0.4"
            />
          )}
        </g>
      ))}
      {domain && (
        <>
          <rect x={domain.x} y="10" width={domain.width} height="100" rx="4" fill="none" stroke="#00C8FF" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.25" />
          <text x={domain.x + domain.width / 2} y="125" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fill="#00C8FF" opacity="0.35" letterSpacing="0.12em">{domain.label}</text>
        </>
      )}
    </svg>
  );
}
