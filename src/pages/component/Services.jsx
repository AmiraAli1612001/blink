import { Box, Grid } from "@mui/material";
import React from "react";
import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";
import icon5 from "../../assets/images/icon5.svg";
import icon6 from "../../assets/images/icon6.svg";

export default function Services() {
  let boxes = [
    {
      icon: icon1,
      h1: "B2C DELIVERIES",
      h11: "Cash Cycle",
      p: "Blink Provides last mile pick ups and deliveries to our business clients directly from their warehouses.",
    },
    {
      icon: icon2,
      h1: "WAREHOUSE STAFFING",
      h11: "Performance Analytics",
      p: "We provide warehouse staff to our client starting from helpers to managers.",
    },

    {
      icon: icon3,
      h1: "E-COMMERCE DELIVERIES",
      h11: "Tracking Updates",
      p: "We provide a suitable solution to your customers based on their requirements and needs.",
    },

    {
      icon: icon4,
      h1: "LAST MILE CONSULATANCY",
      h11: "Pricing Tiers",
      p: "We offer you a suitable and flexible solution for your business based on your requirements",
    },
    {
      icon: icon5,
      h1: "Precise",
      h11: "Delivery Dates",
      p: "Your customers get an exact delivery date, the moment we pick up their package. Who knew that was even possible!",
    },

    {
      icon: icon6,
      h1: "Self Service",
      h11: "Reschedule",
      p: "Delivery rescheduling is now a breeze; one click offers customers hassle-free self-service rescheduling.",
    },
  ];
  return (
    <Box
      id="services"
      className="services"
      sx={{
        width: { xs: "90vw", md: "75vw" },
        margin: "80px auto",
        padding: { xs: "30px", md: "50px" },
      }}
    >
      <h3>Ship Smarter .. Grow Faster</h3>
      <h1 className="h1">We make shipping easier</h1>
      <Grid container className="container">
        {boxes.map((item, index) => {
          return (
            <Grid item xs={12}  lg={3.8} className="item">
              <Box className="box">
                <Box>
                  <img src={item.icon} alt="..." />
                </Box>
                <Box>
                  <h1 >{item.h1}</h1>
                  {/* <h1>{item.h11}</h1> */}
                </Box>
              </Box>
              <p>{item.p}</p>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
