import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Detail = styled.p`
  margin-bottom: 0.5rem;
`;

function CarDetailsPage() {
  const [car, setCar] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Replace with your actual API endpoint
    axios
      .get(`https://api.example.com/cars/${id}`)
      .then((response) => setCar(response.data))
      .catch((error) => console.error("Error fetching car details:", error));
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <Container>
      <Title>
        {car.make} {car.model}
      </Title>
      <Detail>Year: {car.year}</Detail>
      <Detail>Price: ${car.price}/day</Detail>
      <Detail>Description: {car.description}</Detail>
      {/* Add more details and a reservation form here */}
    </Container>
  );
}

export default CarDetailsPage;
