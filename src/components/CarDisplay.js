// src/components/CarDisplay.js
import React, { useState } from "react";
import { cars } from "../carData";
import { CarDisplayWrapper, ArrowButton } from "../styles";
import CarComponent from "./CarComponent";
import { AnimatePresence } from "framer-motion";

const CarDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? cars.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === cars.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <CarDisplayWrapper>
      <ArrowButton onClick={handlePrev}>‹</ArrowButton>
      <AnimatePresence mode="wait">
        <CarComponent key={cars[currentIndex].name} car={cars[currentIndex]} />
      </AnimatePresence>
      <ArrowButton onClick={handleNext}>›</ArrowButton>
    </CarDisplayWrapper>
  );
};

export default CarDisplay;
