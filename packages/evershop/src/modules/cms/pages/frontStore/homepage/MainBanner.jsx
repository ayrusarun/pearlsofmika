import React, { useState, useEffect } from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

export default function MainBanner() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const text = _('Discount ${discount} For All Orders Over ${price}', {
    discount: '20%',
    price: '₹2000'
  });

  return (
    <div className="main-banner-home flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="banner-bg" style={{ transform: `translateY(-${scrollPos * 0.5}px)` }}>
          {/* Background image or video */}
        </div>
        <div className="text-center md:text-left px-2 banner-content" style={{ transform: `translateY(${scrollPos * 0.3}px)` }}>
          <h2 className="h1">{text}</h2>
          <p />
        </div>
      </div>
    </div>
  );
}


export const layout = {
  areaId: 'content',
  sortOrder: 1
};