import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CamperCard from '../components/CamperCard';

const CatalogPage = () => {
  const campers = useSelector((state) => state.campers.campers);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(visibleCount + 4);
  };

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        {campers.slice(0, visibleCount).map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>
      {visibleCount < campers.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default CatalogPage;
