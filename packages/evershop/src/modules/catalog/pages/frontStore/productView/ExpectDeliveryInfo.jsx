import React from 'react';

function ExpectedDeliveryInfo() {
  // Function to calculate the expected delivery date
  const calculateExpectedDelivery = () => {
    const today = new Date();
    const expectedDeliveryDate = new Date(today);
    expectedDeliveryDate.setDate(today.getDate() + 5); // Adding 5 days
    return expectedDeliveryDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <p style={{ marginTop:'10px',fontSize: '1.25rem' }} >Expected delivery date : <span style={{ color: 'var(--primary)'}} >{calculateExpectedDelivery()} </span></p>
    </div>
  );
}

export default ExpectedDeliveryInfo;

export const layout = {
  areaId: 'productPageMiddleRight',
  sortOrder: 21
};
