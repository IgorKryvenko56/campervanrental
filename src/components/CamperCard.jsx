import React, { useState } from 'react';
import Modal from './Modal';
import './CamperCard.css';

const CamperCard = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, description, price, location, gallery,rating,
    transmission, adults, engine } = camper;

    const handleShowMore = () => {
      console.log("Opening modal...");
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      console.log("Closing modal...");
      setIsModalOpen(false);
    };

  return (
    <div className="camper-card">
      <img src={gallery[0]} alt={name} className="camper-image" style={{ width: "290px" }} />
      <div className="camper-info" style={{ width: "526px" }}>
      <h2 className="camper-title">{name}</h2>
      <div className="camper-details">
      <div>Rating: {rating} stars</div>
      <span className="camper-price">${price}/day</span>
      <span className="camper-location">{location}</span>
      <div>Adults: {adults}</div>
      <div>Transmission: {transmission}</div>
      <div>Engine: {engine}</div>
      <div>Kitchen: {camper.details.kitchen ? "Yes" : "No"}</div>
      <div>Beds: {camper.details.beds}</div>
      <div>AC: {camper.details.airConditioner ? "Yes" : "No"}</div>
    </div>
      <button className="show-more-button"  onClick={handleShowMore}>Show more</button>
    </div>

    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
     <h2>{name}</h2>
      <img src={gallery[0]} alt={name} className="modal-image" />
      <p>{description}</p>
      <div>Rating: {rating} stars</div>
      <div>Price: ${price}/day</div>
      <div>Location: {location}</div>
      <div>Adults: {adults}</div>
      <div>Transmission: {transmission}</div>
      <div>Engine: {engine}</div>
      <div>Kitchen: {camper.details.kitchen ? "Yes" : "No"}</div>
      <div>Beds: {camper.details.beds}</div>
      <div>AC: {camper.details.airConditioner ? "Yes" : "No"}</div>
      <div>Bathroom: {camper.details.bathroom ? "Yes" : "No"}</div>
      <div>Shower: {camper.details.shower ? "Yes" : "No"}</div>
      <div>Toilet: {camper.details.toilet ? "Yes" : "No"}</div>
      <div>Freezer: {camper.details.freezer ? "Yes" : "No"}</div>
      <div>Hob: {camper.details.hob}</div>
      <div>Microwave: {camper.details.microwave ? "Yes" : "No"}</div>
      <div>Gas: {camper.details.gas}</div>
      <div>Water: {camper.details.water}</div>
    </Modal>
  </div>
 );
};

export default CamperCard;
       
       
       
       
       
  