import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number | string;
}

/**
 * Official recognizable WhatsApp logo:
 * Authentic WhatsApp Green (#25D366) with crisp white phone handset and speech bubble.
 * Always maintains its official green and white appearance in both light and dark themes.
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5 shrink-0',
  size,
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="WhatsApp"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Official WhatsApp Green circle base */}
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      {/* Official White WhatsApp Handset & Bubble */}
      <path
        fill="#FFFFFF"
        d="M23.3 8.7A10.3 10.3 0 0 0 16 5.7c-5.7 0-10.3 4.6-10.3 10.3 0 1.8.5 3.6 1.4 5.1L5.7 26.3l5.3-1.4c1.5.8 3.2 1.3 5 1.3h0c5.7 0 10.3-4.6 10.3-10.3 0-2.8-1.1-5.3-3-7.2zm-7.3 15.8h0c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3a8.5 8.5 0 0 1-1.3-4.7c0-4.7 3.8-8.5 8.5-8.5 2.3 0 4.4.9 6 2.5 1.6 1.6 2.5 3.7 2.5 6 0 4.7-3.9 8.7-8.4 8.7zm4.7-6.4c-.3-.1-1.5-.7-1.8-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.3-.7-.7-1.3-1.5-1.4-1.8-.1-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3z"
      />
    </svg>
  );
};
