import React, { useState } from 'react';
import { Eye, Images } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Product, BRAND_CONFIG } from '../data/weddingData';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const mainImage = product.images[0];
  const whatsAppUrl = BRAND_CONFIG.getProductWhatsAppUrl(product);

  return (
    <div className="group relative flex flex-col bg-white dark:bg-[#181716] border border-stone-200/80 dark:border-stone-800/80 rounded-xs overflow-hidden transition-all duration-300 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-lg">
      
      {/* Product Image Frame */}
      <div
        className="relative aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-900 cursor-pointer"
        onClick={() => onOpenDetails(product)}
      >
        {!imageError ? (
          <img
            src={mainImage}
            alt={product.altText}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-stone-100 dark:bg-stone-900 text-stone-500 text-center">
            <span className="font-serif text-xl text-stone-800 dark:text-stone-200">{product.name}</span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1">Dream Invites</span>
          </div>
        )}

        {/* Quiet Category Marker */}
        <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] tracking-widest uppercase font-medium text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-800/60">
          {product.category}
        </div>

        {/* Multi-image photo count badge */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-stone-950/70 text-white backdrop-blur-xs text-[10px] font-sans font-medium px-2 py-0.5 rounded-xs tracking-wider flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
            <Images className="w-3 h-3" />
            <span>{product.images.length} views</span>
          </div>
        )}

        {/* Quick View overlay hover affordance */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(product);
          }}
          className="absolute inset-0 bg-stone-950/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold text-white focus-visible:opacity-100"
          aria-label={`View details for ${product.name}`}
        >
          <span className="bg-stone-900/90 dark:bg-stone-100/90 text-white dark:text-stone-900 px-4 py-2 rounded-xs flex items-center gap-2 shadow-md">
            <Eye className="w-3.5 h-3.5" />
            <span>View Details</span>
          </span>
        </button>
      </div>

      {/* Card Content & Metadata */}
      <div className="flex flex-col grow p-5 sm:p-6 space-y-3.5">
        
        {/* Title & Tagline */}
        <div>
          <h3
            onClick={() => onOpenDetails(product)}
            className="font-serif text-xl sm:text-2xl font-normal text-stone-900 dark:text-stone-50 group-hover:text-[#00AEEF] dark:group-hover:text-[#00AEEF] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
          {product.tagline && (
            <p className="text-xs text-stone-500 dark:text-stone-400 font-normal mt-0.5 line-clamp-1 italic">
              {product.tagline}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Finishing details with typographic separator */}
        {product.details?.finishing && (
          <div className="text-[11px] text-stone-500 dark:text-stone-400 pt-1 border-t border-stone-100 dark:border-stone-800/60 flex items-center gap-1.5 flex-wrap">
            <span>{product.details.style || product.category}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{product.details.finishing}</span>
          </div>
        )}

        {/* Dual Actions: Inquire on WhatsApp & View Details */}
        <div className="pt-2 mt-auto grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onOpenDetails(product)}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium uppercase tracking-wider text-stone-700 dark:text-stone-200 border border-stone-300 dark:border-stone-700 rounded-xs hover:border-stone-900 dark:hover:border-stone-100 hover:text-stone-900 dark:hover:text-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 dark:bg-stone-100 dark:text-stone-900 rounded-xs hover:bg-stone-800 dark:hover:bg-white transition-all shadow-xs group/btn focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
            aria-label={`Inquire on WhatsApp about ${product.name}`}
          >
            <WhatsAppIcon className="w-4 h-4 group-hover/btn:scale-105 transition-transform" />
            <span>Inquire</span>
          </a>
        </div>

      </div>

    </div>
  );
};
