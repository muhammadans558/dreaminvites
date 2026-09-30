import React from 'react';

interface DreamInvitesLogoProps {
  className?: string;
  withTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  darkInvert?: boolean; // When true, text adapts to light/dark themes
}

/**
 * Dream Invites Official Brand Logo
 * 
 * Accurately calibrated to ensure:
 * - Full visibility of "DREAM", turquoise emblem, "INVITES", and tagline
 * - No cutoff, clipping, or overflow on any viewport
 * - Official turquoise (#00AEEF) circle with white thought-cloud emblem
 * - Tagline: "Bringing your print to Life."
 */
export const DreamInvitesLogo: React.FC<DreamInvitesLogoProps> = ({
  className = '',
  withTagline = true,
  size = 'md',
  darkInvert = true,
}) => {
  // Height and scale dimensions that maintain exact 420x86 aspect ratio
  const dimensions = {
    sm: { width: 165, height: withTagline ? 34 : 24 },
    md: { width: 215, height: withTagline ? 44 : 30 },
    lg: { width: 265, height: withTagline ? 55 : 36 },
  }[size];

  const textColorClass = darkInvert ? 'fill-neutral-900 dark:fill-neutral-100' : 'fill-neutral-900';
  const taglineColorClass = darkInvert ? 'fill-neutral-700 dark:fill-neutral-300' : 'fill-neutral-700';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 420 86"
        width={dimensions.width}
        height={dimensions.height}
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full h-auto"
        role="img"
        aria-label="Dream Invites: Bringing your print to Life."
      >
        <g id="dream-invites-logo">
          {/* DREAM Text (Ends at x=176 with safe spacing before circle) */}
          <text
            x="176"
            y="43"
            textAnchor="end"
            fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="900"
            fontSize="26"
            letterSpacing="5"
            className={textColorClass}
          >
            DREAM
          </text>

          {/* Official Turquoise Emblem (Centered at x=210, y=34) */}
          <g transform="translate(210, 34)">
            {/* Turquoise Circle */}
            <circle cx="0" cy="0" r="20" fill="#00AEEF" />
            
            {/* White Cloud Emblem with Thought Tail */}
            <path
              d="M -10 2 
                 C -12 2 -13 0 -13 -2 
                 C -13 -4.5 -11 -6.5 -8.5 -6.5 
                 C -7.5 -9 -4.5 -11 -1 -11 
                 C 2.5 -11 5 -8.5 7 -5.5 
                 C 9.5 -5.5 11.5 -3.5 11.5 -1 
                 C 11.5 2 9.5 3.5 7 3.5 
                 L -8 3.5 
                 C -9 3.5 -10 3 -10 2 Z"
              fill="#FFFFFF"
            />
            {/* Thought tail droplet pointing to bottom-right */}
            <circle cx="6" cy="7.5" r="1.6" fill="#FFFFFF" />
            <circle cx="8.5" cy="10" r="1.0" fill="#FFFFFF" />
          </g>

          {/* INVITES Text (Starts at x=244 with lighter weight per official brand asset) */}
          <text
            x="244"
            y="43"
            textAnchor="start"
            fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="400"
            fontSize="26"
            letterSpacing="5"
            className={textColorClass}
          >
            INVITES
          </text>

          {/* Tagline: Bringing your print to Life. (Centered horizontally at x=210) */}
          {withTagline && (
            <text
              x="210"
              y="72"
              textAnchor="middle"
              fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, sans-serif"
              fontWeight="400"
              fontSize="12.5"
              letterSpacing="0.8"
              className={taglineColorClass}
            >
              Bringing your print to Life.
            </text>
          )}
        </g>
      </svg>
    </div>
  );
};
