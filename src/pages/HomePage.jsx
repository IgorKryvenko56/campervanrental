import React, { useState, useEffect } from 'react';
import CamperCard from '../components/CamperCard';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [adverts, setAdverts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await axios.get('https://64a3a8f2c3b509573b5660c3.mockapi.io/adverts');
        setAdverts(response.data);
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };

    fetchAdverts();
  }, []);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <>
    <h1>Welcome to Camper Van Rental</h1>
    <div  className="home-page">
      <div className="left-side">
        <h2>Location</h2>
        <div className="location-container">
          <i className="icon map-pin"></i>
          <h3>Kyiv, Ukraine</h3>
        </div>
        <h3>Filters</h3>
        <div className="filters-container">
          <div className="number-input">
            <h2>Vehicle equipment</h2>
            <div className="equipment-icons">
              <div>AC</div>
              <div>Automatic</div>
              <div>Kitchen</div>
              <div>TV</div>
              <div>Shower/WC</div>
            </div>
          </div>
          <div className="vehicle-type">
            <h2>Vehicle type</h2>
            <div className="type-icons">
              <div>Van</div>
              <div>Fully integrated</div>
              <div>Alcove</div>
            </div>
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="right-side">
        <div className="adverts-container">
          {adverts.slice(0, visibleCount).map(advert => (
            <CamperCard key={advert._id} camper={advert} />
          ))}
        </div>
        {visibleCount < adverts.length && (
          <button className="load-more-button" onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  </>
  );
};

export default HomePage;
