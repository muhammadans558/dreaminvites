import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BRAND_CONFIG } from '../data/weddingData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={BRAND_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-104 active:scale-95 transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label={`Chat with Dream Invites on WhatsApp at ${BRAND_CONFIG.phoneDisplay}`}
        title="WhatsApp Us"
      >
        <WhatsAppIcon className="w-8 h-8 sm:w-8.5 sm:h-8.5" />
      </a>
    </aside>
  );
};
