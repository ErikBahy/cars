// src/components/CarComponent.js
import React from "react";
import { CarComponentWrapper, CarInfo } from "../styles";

const CarComponent = ({ car }) => {
  return (
    <CarComponentWrapper
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <img src={car.image} alt={`${car.name}`} />
      <CarInfo>
        <h2>{car.name}</h2>
        <p>{car.make}</p>
      </CarInfo>
    </CarComponentWrapper>
  );
};

export default CarComponent;
