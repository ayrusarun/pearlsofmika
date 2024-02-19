import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';



function CouponGrid() {
  const coupons = [
    { description: 'AVAIL FLAT 10% OFF ON YOUR FIRST ORDER', code: 'NEW10', expiryTime: new Date('2024-03-01T00:00:00') },
    { description: 'AVAIL 15% OFF ON ORDERS ABOVE 2500 ', code: 'SHINE15', expiryTime: new Date('2024-03-02T00:00:00') },
    { description: 'AVAIL 20% OFF ON ORDERS ABOVE 5000 ', code: 'JACKPOT20', expiryTime: new Date('2024-03-03T00:00:00') }
  ]; // Coupon data
  

  const [copiedCoupon, setCopiedCoupon] = useState('');

  // Function to copy coupon to clipboard
  const copyToClipboard = (coupon) => {
    navigator.clipboard.writeText(coupon);
    setCopiedCoupon(coupon);
  };


  // Timer to calculate time remaining until offer ends
  const calculateTimeRemaining = (expiryTime) => {
    const now = new Date();
    const diff = expiryTime - now;
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return `${hours}h ${minutes}m ${seconds}s`;

  };

  // Set interval to update time remaining every second for each coupon
  useEffect(() => {
    const intervals = coupons.map((coupon) => setInterval(() => {
        calculateTimeRemaining(coupon.expiryTime);
      }, 1000));
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [coupons]);

  return (
    <div>
      <div className="flex items-center mt-2">
        <img src="/policy/coupon.gif" alt="Offer Icon" className="w-3 h-3 mr-1" />
        <h6 className="font-bold">Exclusive Offers for You:</h6>
      </div>
      <div className="overflow-x-auto whitespace-nowrap">
        {coupons.map((coupon, index) => (
          <div key={index} className="inline-block px-1 py-1 rounded-lg mx-1 my-2" style={{ fontWeight:'bold', fontSize: '10px', borderRadius: '10px', backgroundColor: '#ffffff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
            <p className="text-sm mb-1">{coupon.description}</p>
            <div className="flex items-center">
              <span className="text-lg" style={{ fontSize: '12px' }}>USE CODE: </span>
              <span className="text-lg" style={{ fontWeight: 'bold' ,fontSize: '13px', color: 'var(--primary)', marginLeft: '5px' }}>{coupon.code.toUpperCase()}</span>
              
              <button
                type="button"
                onClick={() => copyToClipboard(coupon.code)}
                style={{ fontSize: '13px', color: 'var(--primary)', marginLeft: '10px' }}
          
              >
                <FontAwesomeIcon icon={faCopy} />
              </button>
              {copiedCoupon === coupon.code && <span className="ml-1" style={{ color: 'green', fontSize:'11px'}} > Copied!</span>}
            </div>
            {/* <p className="text-sm text-gray-600 mt-1">Offer ends in: {calculateTimeRemaining(coupon.expiryTime)}</p>  */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CouponGrid;




export const layout = {
  areaId: 'productPageMiddleRight',
  sortOrder: 19
};


