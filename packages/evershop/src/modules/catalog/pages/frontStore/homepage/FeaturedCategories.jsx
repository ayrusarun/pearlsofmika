import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <h3 className="h4 uppercase mt-1 mb-1">Krystal Collections</h3>
          <div className="text-center">
            <a href="/krystals"> 
              <img src="./FeaturedCategories/krystals.jpg" alt="" style={{ borderRadius: '1px' }} />
            </a>
          </div>
          <div className="mb-1">
           <p>
              <b>Unearth the Magic:</b> Discover the world of crystals and unlock their mystical properties.
          </p>
          </div>
          <Button url="/krystals" title="Shop Krystals" variant="primary" />
        </div>

        <div>
          <h3 className="h4 uppercase mt-1 mb-1">18k Gold Collections</h3>
          <div>
            <a href="/18k"> 
              <img src="./FeaturedCategories/18k.jpg" alt="" style={{ borderRadius: '1px' }} />
            </a>
          </div>
          <div className="mb-1">
            <p>
              <b>Luxury Redefined:</b> Experience luxury redefined with our exquisite 18k gold-plated creations.
            </p>
          </div>
          <Button url="/18k" title="Shop 18K Gold" variant="primary" />
        </div>
        <div>
          <h3 className="h4 uppercase mt-1 mb-1">915 Sterling Silver</h3>
          <div>
            <a href="/silver">
              <img src="./FeaturedCategories/silver.jpg" alt="" style={{ borderRadius: '1px' }} />
            </a>
          </div>
          <div className="mb-1">
            <p>
              <b>Radiant Purity:</b> Adorn yourself in the radiant purity of 916 sterling silver brilliance.
            </p>
          </div>
          <Button url="/silver" title="Shop 916 Silver" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};