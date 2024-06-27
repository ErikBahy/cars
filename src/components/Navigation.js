import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Nav = styled.nav`
  background-color: lightblue;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const MenuButton = styled.button`
  display: block;
  width: 100%;
  background: none;
  border: none;
  font-size: 1.5rem;
  text-align: left;
  padding: 0.5rem 0;
  z-index: 1001;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  z-index: 1002;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavContent = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: lightblue;
  backdrop-filter: blur(5px);
  padding: 2rem;
  z-index: 999;

  @media (min-width: 768px) {
    position: static;
    padding: 0;
    background-color: transparent;
    backdrop-filter: none;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NavItem = styled(motion.li)`
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const drawerVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const closeButtonVariants = {
  open: { opacity: 1, scale: 1 },
  closed: { opacity: 0, scale: 0.8 },
};

function Navigation({ isOpen, setIsOpen }) {
  const toggleMenu = () => setIsOpen(!isOpen);
  const isMobile = window.innerWidth < 768;

  return (
    <Nav>
      <MenuButton onClick={toggleMenu}>☰ Menu</MenuButton>
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <NavContent
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
          >
            {isOpen && isMobile && (
              <CloseButton
                onClick={toggleMenu}
                variants={closeButtonVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                ✕
              </CloseButton>
            )}
            <NavList>
              {["Home", "Our Cars", "Reservations", "Manage Cars"].map(
                (item, index) => (
                  <NavItem
                    key={item}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    custom={index}
                  >
                    <NavLink
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      onClick={isMobile ? toggleMenu : undefined}
                    >
                      {item}
                    </NavLink>
                  </NavItem>
                )
              )}
            </NavList>
          </NavContent>
        )}
      </AnimatePresence>
    </Nav>
  );
}

export default Navigation;
