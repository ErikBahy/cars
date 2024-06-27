// src/styles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.div`
  background: url("assets/rruga.jpeg") no-repeat center center;
  background-size: cover;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffd700;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

export const OverlayText = styled.h1`
  font-size: 48px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex: 1;
  }

  button {
    padding: 10px 20px;
    background-color: #ffd700;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #333333;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
    }
  }
`;

export const CarDisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: yellow;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:focus {
    outline: none;
  }

  &:nth-of-type(1) {
    left: 5%;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &:nth-of-type(3) {
    right: 5%;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CarComponentWrapper = styled(motion.div)`
  text-align: center;
  img {
    width: 300px;
    height: auto;

    @media (max-width: 768px) {
      width: 200px;
    }
  }
`;

export const CarInfo = styled.div`
  color: #ffd700;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
