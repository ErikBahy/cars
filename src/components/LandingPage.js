import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HeroSectionComponent from "./HeroSection";
import CarDisplay from "./CarDisplay";
import { FaArrowDown } from "react-icons/fa";
import carBackground from "../assets/rruga.jpeg";

const cars = [
  { id: 1, name: "Sporty Coupe", make: "Speed Motors" },
  { id: 2, name: "Luxury Sedan", make: "Comfort Cars" },
  { id: 3, name: "Adventure SUV", make: "Rugged Rides" },
  { id: 4, name: "Eco-Friendly Hatchback", make: "Green Wheels" },
];

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: auto; /* Allow vertical scrolling */
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${carBackground});
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s ease;
  }

  @media (min-width: 768px) {
    &::before {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

const PromptText = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 1.2em;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  border-radius: 5px;
`;

const DownArrow = styled.div`
  text-align: center;
  font-size: 2em;
  color: #ffd700;
  margin-top: 5px; // Adjusted for spacing
  animation: bounce 2s infinite;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  border-radius: 50%;
`;

const HomePage = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [opacity, setOpacity] = useState(1);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const newOpacity = Math.max(1 - scrollY / windowHeight, 0);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentCar = cars[Math.abs(page) % cars.length];

  const handleCarClick = () => {
    navigate(`/car/${currentCar.id}`);
  };

  return (
    <PageContainer>
      <Background opacity={opacity} />
      <HeroSectionComponent />
      <ContentWrapper>
        <PromptText>Click on the car to view details</PromptText>
        <DownArrow>
          <FaArrowDown />
        </DownArrow>
        <CarDisplay cars={cars} onClick={handleCarClick} />
        {/* <ExploreButton onClick={() => navigate("/cars")}>
          Explore Our Cars
        </ExploreButton> */}
      </ContentWrapper>
    </PageContainer>
  );
};

export default HomePage;
