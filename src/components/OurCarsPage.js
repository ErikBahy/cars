import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const CarCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

function OurCarsPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios
      .get("https://api.example.com/cars")
      .then((response) => setCars(response.data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return (
    <Container>
      <Title>Our Cars</Title>
      <CarGrid>
        {cars.map((car) => (
          <CarCard key={car.id}>
            <h2>
              {car.make} {car.model}
            </h2>
            <p>Price: ${car.price}/day</p>
            <Link to={`/car/${car.id}`}>View Details</Link>
          </CarCard>
        ))}
      </CarGrid>
    </Container>
  );
}

export default OurCarsPage;
