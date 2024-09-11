import { Box, Grid } from "@mui/material";
import React from "react";
import img from "../../assets/images/phone-right.svg";
import sponser from "../../assets/images/1.c42b0b16.png";
export default function Sectiontwo() {
  let spons = [sponser, sponser, sponser];
  return (
    <Box
      id="products"
      className="section-2"
      sx={{ padding: { xs: "20px", md: "50px" } }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item className="left" xs={12} md={6}>
          <h2>
            Bl<mark>ink</mark> <mark>Upfront</mark>
          </h2>
          <Box>
            <h1>Amaze your clients with fastest <span>delivery</span>  in UAE.</h1>
            
          <h1>

          Your trusted delivery partner in success .

          </h1>
          </Box>
          <Box>
            {/* <p>

            </p> */}
            {/* <p>
              investment in growth, and optimizes your inventory management
              strategies.
            </p> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={img}
            alt="..."
            style={{ margin: "auto", display: "flex" , maxWidth:"400px" }}
          />
        </Grid>

        <Grid xs={12} md={10}>
          <h3>REST ASSURED WITH BLINK</h3>
          <h5>
            Join hundreds of eCommerce businesses that have chosen Blink to
            elevate their shipping processes
          </h5>
        </Grid>
        {/* <Grid
          xs={12}
          md={10}
          sx={{ display: "flex", gap: "20px", marginTop: "50px" }}
        >
          {spons.map((item, index) => {
            return (
              <img
                style={{ width: "120px" }}
                key={index}
                src={item}
                alt="..."
              />
            );
          })}
        </Grid> */}
      </Grid>
    </Box>
  );
}
