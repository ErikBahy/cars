import React from "react";
import styled from "styled-components";
import CarCard from "./CarCard";
import carBackground from "../assets/rruga.jpeg"; // Update the path as needed
import car from "../assets/bmw.png";
import m4 from "../assets/bmwM4.png";
import porche from "../assets/porche.jpeg";

// Sample data
const cars = [
  {
    id: 1,
    name: "Sporty Coupe",
    make: "Speed Motors",
    images: [car, m4, porche],
    price: 100,
    transmission: "Automatic",
    seating: 4,
    motorPower: "200 HP",
    fuelType: "Petrol",
    year: 2020,
  },
  {
    id: 2,
    name: "Luxury Sedan",
    make: "Comfort Cars",
    images: [car, m4, porche],
    price: 150,
    transmission: "Automatic",
    seating: 5,
    motorPower: "250 HP",
    fuelType: "Diesel",
    year: 2021,
  },
  {
    id: 3,
    name: "Adventure SUV",
    make: "Rugged Rides",
    images: [car, m4, porche],
    price: 120,
    transmission: "Manual",
    seating: 7,
    motorPower: "300 HP",
    fuelType: "Petrol",
    year: 2019,
  },
  {
    id: 4,
    name: "Eco-Friendly Hatchback",
    make: "Green Wheels",
    images: [car, m4, porche, car, m4, porche],
    price: 80,
    transmission: "Automatic",
    seating: 5,
    motorPower: "150 HP",
    fuelType: "Electric",
    year: 2022,
  },
];

// Styled Container
const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 16px;
  overflow-x: hidden; /* Prevent horizontal scrollbar */
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: background-color 0.3s ease;
  }

  @media (min-width: 768px) {
    &::before {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const Heading = styled.h1`
  color: white;
  text-align: center;
`;

const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
  justify-items: center;
`;

const CarsPage = () => {
  return (
    <PageContainer>
      <Background />
      <Heading>Available Cars</Heading>
      <CarsGrid>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </CarsGrid>
    </PageContainer>
  );
};

export default CarsPage;
