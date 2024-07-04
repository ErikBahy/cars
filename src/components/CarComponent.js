import React, { useEffect, useRef } from "react";
import { CarComponentWrapper, CarInfo } from "../styles";
import { motion, useAnimation } from "framer-motion";

const carVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const CarComponent = ({ car }) => {
  const controls = useAnimation();
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const bounceAnimation = {
      y: ["0%", "-10%", "0%", "-2%", "0%", "-1%", "0%", "-1%", "0%", "-1%"],
      transition: { duration: 2, ease: "easeInOut" },
    };

    let bounceInterval;

    const sequence = async () => {
      if (isMounted.current) {
        await controls.start("visible");
        await new Promise((resolve) => setTimeout(resolve, 1000));

        bounceInterval = setInterval(() => {
          if (isMounted.current) {
            controls.start(bounceAnimation);
          }
        }, 8000);
      }
    };

    sequence();

    return () => {
      isMounted.current = false;
      controls.stop();
      clearInterval(bounceInterval);
    };
  }, [controls, car]);

  return (
    <CarComponentWrapper
      as={motion.div}
      initial="hidden"
      animate={controls}
      variants={carVariants}
      transition={{ duration: 1 }}
    >
      <motion.img
        src={car.image}
        alt={car.name}
        style={{
          maxWidth: "400px", // Larger size for desktop
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <CarInfo>
        <h2>{car.name}</h2>
        <p>{car.make}</p>
      </CarInfo>
    </CarComponentWrapper>
  );
};

export default CarComponent;
