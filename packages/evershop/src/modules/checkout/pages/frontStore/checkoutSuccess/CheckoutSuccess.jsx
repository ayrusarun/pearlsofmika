import React, { useState } from 'react';
import Area from '@components/common/Area';
import './CheckoutSuccess.scss';
import ReviewPopup from './ReviewPopup';

export default function CheckoutSuccessPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-3">
      <Area id="checkoutSuccessPageLeft" />
      <Area id="checkoutSuccessPageRight" />
      <div>
        {isPopupOpen && <ReviewPopup onClose={closePopup} />}
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
