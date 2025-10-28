import React from 'react';

interface ArchitectureViewerProps {
  src: string;
  title?: string;
  height?: string;
  showFullscreenLink?: boolean;
}

export default function ArchitectureViewer({
  src,
  title = "Architecture Diagram",
  height = "800px",
  showFullscreenLink = true
}: ArchitectureViewerProps) {
  return (
    <div className="architecture-viewer my-8">
      {title && (
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {showFullscreenLink && (
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <span>Open Fullscreen</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      )}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <iframe
          src={src}
          style={{ width: '100%', height, border: 'none' }}
          title={title}
          loading="lazy"
        />
      </div>
      <p className="mt-2 text-sm text-gray-600">
        💡 Tip: Hover over components for details, click for more information, and use mouse wheel to zoom
      </p>
    </div>
  );
}
