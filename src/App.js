import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import LandingPage from "./components/LandingPage";
import OurCarsPage from "./components/OurCarsPage";
import CarDetailsPage from "./components/CarDetailsPage";
import ReservationsManagementPage from "./components/ReservationsManagementPage";
import CarsManagementPage from "./components/CarsManagementPage";
import Navigation from "./components/Navigation";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding-top: 60px; // Adjust this value based on your navbar height
  filter: ${(props) => (props.isMenuOpen ? "blur(0px)" : "none")};
  transition: filter 0.3s ease-in-out;

  @media (min-width: 768px) {
    filter: none;
  }
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <AppContainer>
        <GlobalStyle />
        <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <ContentContainer isMenuOpen={isMenuOpen}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/our-cars" element={<OurCarsPage />} />
            <Route path="/car/:id" element={<CarDetailsPage />} />
            <Route
              path="/reservations"
              element={<ReservationsManagementPage />}
            />
            <Route path="/manage-cars" element={<CarsManagementPage />} />
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;
