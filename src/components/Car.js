import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import CarDetailsCarousel from "./CarDetailsCarousel";
import { FaInfoCircle, FaCheckCircle } from "react-icons/fa";
import carBackground from "../assets/rruga.jpeg"; // Update the path as needed

const PageContainer = styled.div`
  background: url(${carBackground}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
    z-index: 1;
  }
`;

const ContentContainer = styled.div`
  background: rgba(0, 0, 0, 0.7); /* Darker and slightly transparent */
  width: 60%;
  height: 100%; /* Full height of the viewport */
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  padding-bottom: 60px; /* Ensure there's space for the fixed button */

  @media (max-width: 768px) {
    width: 90%;
    background: rgba(0, 0, 0, 0.7); /* Ensure background on mobile */
    padding-bottom: 80px; /* Adjust for mobile */

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ffd700;
      border-radius: 10px;
      border: 2px solid transparent;
      background-clip: content-box;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  @media (min-width: 768px) {
    background: transparent; /* Remove background on desktop */
    padding-bottom: 100px; /* More spacing for the Book Now button */
    ::-webkit-scrollbar {
      display: none; /* Hide scrollbar on desktop */
    }
    -ms-overflow-style: none; /* Hide scrollbar on IE and Edge */
    scrollbar-width: none; /* Hide scrollbar on Firefox */
  }
`;

const BookNowButton = styled.button`
  width: 100%;
  max-width: 600px; /* Match the card width */
  background-color: rgba(255, 215, 0, 0.8);
  color: black;
  padding: 15px;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px; /* Match the card border radius */
  margin-bottom: 40px;

  &:hover {
    background-color: rgba(230, 194, 0, 0.8); /* Slightly darker on hover */
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0; /* Ensure it fills the width */
    margin: 0;
    border-radius: 0;
    z-index: 3;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 20px;
  margin: 20px 0; /* Ensure consistent margin */
  width: 100%;
  max-width: 600px; /* Match the carousel width */
  color: white;

  ${({ removeMarginTop }) =>
    removeMarginTop &&
    `
    margin-top: 0;
  `}

  h3 {
    color: #ffd700;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin: 5px 0;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

const Price = styled.div`
  font-size: 2em;
  color: #ffd700;
  font-weight: bold;
  margin-bottom: 10px;
`;

const pricingConditions = [
  "Must be 21 years old or above",
  "Valid driver's license required",
  "Insurance included",
];

const features = [
  "Air Conditioning",
  "GPS Navigation",
  "Bluetooth Connectivity",
  "Heated Seats",
  "Backup Camera",
  "Leather Seats",
  "Sunroof",
  "Blind Spot Monitoring",
  "Keyless Entry",
  "Adaptive Cruise Control",
  "Automatic Emergency Braking",
  "Lane Keeping Assist",
  "Parking Sensors",
  "Rain Sensing Wipers",
  "Automatic Headlights",
  "Remote Start",
  "Apple CarPlay",
  "Android Auto",
  "Wi-Fi Hotspot",
  "Wireless Charging",
  "Rear Cross-Traffic Alert",
  "Driver Attention Monitor",
  "Head-Up Display",
  "Premium Sound System",
  "Multi-Zone Climate Control",
  "Power Liftgate",
  "Ambient Lighting",
  "Heated Steering Wheel",
  "Voice Recognition",
  "Satellite Radio",
];

const Car = () => {
  const { carId } = useParams();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <CarDetailsCarousel />
        <Card>
          <h3>Pricing</h3>
          <Price>$150 / day</Price>
          <ul>
            {pricingConditions.map((condition, index) => (
              <li key={index}>
                <FaInfoCircle color="#ffd700" size="1.5em" />
                {condition}
              </li>
            ))}
          </ul>
        </Card>
        <Card removeMarginTop style={{ marginBottom: width < 768 ? 50 : 20 }}>
          <h3>Features</h3>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <FaCheckCircle color="#ffd700" size="1.5em" />
                {feature}
              </li>
            ))}
          </ul>
        </Card>
        <BookNowButton>Book Now</BookNowButton>
      </ContentContainer>
    </PageContainer>
  );
};

export default Car;
