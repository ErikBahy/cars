import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroSectionComponent from "./HeroSection";
import CarDisplay from "./CarDisplay";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/rruga.jpeg");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  color: #f5f5f5;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subheading = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: #f5f5f5;
  margin-top: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const CarContainer = styled(motion.div)`
  position: absolute;
  bottom: 20%;
  cursor: pointer;
`;

const ArrowButton = styled.button`
  background: none;
  backgroundcolor: red;
  border: none;
  font-size: 2rem;
  color: #f5f5f5;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === "left" ? "left: 2rem;" : "right: 2rem;")}
`;

const carVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const cars = [
  { id: 1, name: "Sporty Coupe", make: "Speed Motors" },
  { id: 2, name: "Luxury Sedan", make: "Comfort Cars" },
  { id: 3, name: "Adventure SUV", make: "Rugged Rides" },
  { id: 4, name: "Eco-Friendly Hatchback", make: "Green Wheels" },
];

const Car = ({ car, onClick }) => (
  <CarContainer
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {/* Replace this with your actual car image */}
    <div
      style={{
        width: "200px",
        height: "100px",
        background: "#FFB100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {car.image}
    </div>
  </CarContainer>
);

const HomePage = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const navigate = useNavigate();

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentCar = cars[Math.abs(page) % cars.length];

  const handleCarClick = () => {
    navigate(`/car/${currentCar.id}`);
  };

  return (
    <div>
      <CarDisplay cars={cars} />
      <HeroSectionComponent />
    </div>
  );
};

export default HomePage;
