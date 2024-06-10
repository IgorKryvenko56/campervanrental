import React from 'react';
import { useSelector } from 'react-redux';
import CamperCard from '../components/CamperCard';



const FavoritesPage = () => {
  const favorites = useSelector((state) => state.campers.favorites);
  const campers = useSelector((state) => state.campers.list);

  const favoriteCampers = campers.filter(camper => favorites.includes(camper._id));

  return (
    <div>
      <h1>Favorites</h1>
      <div className="favorites">
        {favoriteCampers.length > 0 ? (
          favoriteCampers.map(camper => (
            <CamperCard
              key={camper._id}
              camper={camper}
              isFavorite={true}
            />
          ))
        ) : (
          <p>No favorite campers added.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
