import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import LandingPage from "./components/LandingPage";
import Car from "./components/Car";
import CarDetailsPage from "./components/CarsPage";
import ReservationsManagementPage from "./components/ReservationsManagementPage";
import CarsManagementPage from "./components/CarsManagementPage";
import Navigation from "./components/Navigation";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  overflow: hidden; /* Ensure no scrollbars on the main container */
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding-top: 60px; /* Adjust this value based on your navbar height */
  filter: ${(props) => (props.isMenuOpen ? "blur(8px)" : "none")};
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
            <Route path="/our-cars" element={<CarDetailsPage />} />
            <Route path="/car/:id" element={<Car />} />
            {/* <Route path="/cars" element={<CarDetailsPage />} /> */}
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
