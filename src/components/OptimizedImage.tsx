import React, { useState } from 'react';

export interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  isThumbnail?: boolean;
  priority?: boolean;
  fallbackComponent?: React.ReactNode;
}

/**
 * Returns the optimized WebP path and fallback for an image.
 */
export const getOptimizedImagePath = (
  src: string,
  isThumbnail = false
): { webp: string; original: string } => {
  if (!src) return { webp: '', original: '' };

  if (
    src.endsWith('.webp') ||
    src.endsWith('.svg') ||
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('data:')
  ) {
    return { webp: src, original: src };
  }

  const extMatch = src.match(/\.(png|jpe?g)$/i);
  if (!extMatch) {
    return { webp: src, original: src };
  }

  const basePath = src.slice(0, extMatch.index);
  const webp = isThumbnail ? `${basePath}-thumb.webp` : `${basePath}.webp`;

  return { webp, original: src };
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  isThumbnail = false,
  priority = false,
  className = '',
  fallbackComponent,
  onLoad,
  onError,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const { webp, original } = getOptimizedImagePath(src, isThumbnail);

  if (hasError && fallbackComponent) {
    return <>{fallbackComponent}</>;
  }

  return (
    <picture className="w-full h-full block">
      {webp && webp !== original && (
        <source srcSet={webp} type="image/webp" />
      )}
      <img
        src={original}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={(e) => {
          onLoad?.(e);
        }}
        onError={(e) => {
          setHasError(true);
          onError?.(e);
        }}
        className={className}
        {...props}
      />
    </picture>
  );
};
