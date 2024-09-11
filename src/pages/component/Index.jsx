import { Box, Button } from "@mui/material";
import React from "react";
import left from "../../assets/images/ShipBlu-hero-image-b.85036569.svg";
import right from "../../assets/images/ShipBlu-hero-image-t.47bf11f7.svg";

export default function Index() {
  return (
    <Box className="index">
      {/* <img src={left} alt="..." className="left" />
      <img src={right} alt="..." className="right" /> */}

      <Box>
        <p className="now">
          <span>Now</span> <span>Expand your business Effortlessly! 🎉</span>
        </p>
        <Box className="h1">
          <h1>Let us handle all</h1>
          <h1>
            your <span>shipping</span> needs
          </h1>
        </Box>
        <Box>
          <p>Robust, adaptable, and AI-powered, we will make it easy to</p>
          <p>revamp your shipping experience</p>
        </Box>
        <Box>
          <Button>Start Shipping</Button>
        </Box>
      </Box>
    </Box>
  );
}
