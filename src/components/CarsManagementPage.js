import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  overflow-x: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 0.5rem;
  text-align: left;

  @media (min-width: 768px) {
    padding: 0.75rem;
  }
`;

const Td = styled.td`
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;

  @media (min-width: 768px) {
    padding: 0.75rem;
  }
`;

const Button = styled.button`
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

function CarsManagementPage() {
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
      <Title>Cars Management</Title>
      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Make</Th>
            <Th>Model</Th>
            <Th>Year</Th>
            <Th>Price</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <Td>{car.id}</Td>
              <Td>{car.make}</Td>
              <Td>{car.model}</Td>
              <Td>{car.year}</Td>
              <Td>${car.price}/day</Td>
              <Td>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default CarsManagementPage;
