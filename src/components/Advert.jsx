import React from 'react';

const Advert = ({ advert }) => {
  return (
    <div className="advert">
      <h3>{advert.name}</h3>
      <p>{advert.description}</p>
      <p>Price: ${advert.price}</p>
      {/* Render other advert details as needed */}
    </div>
  );
};

export default Advert;
