import { Box, Button, Grid } from "@mui/material";
import React from "react";
import computer from "../../assets/images/computer.svg";
export default function Computer() {
  return (
    <Box className="computer">
      <Grid container className="container">
        <Grid item  >
          <img src={computer} alt="..." />
        </Grid>
        <Grid item>
          <h3>No more emailing excel sheets.</h3>
          <h1 style={{marginTop:"30px"}}>
            We make your <span>financial</span>
          </h1>
          <h1>
            <span>management</span> easier
          </h1>
          <p style={{marginTop:"30px"}}>
            Get paid on time with auto-generated invoices and statements
           
          </p>
          <p> accessible on your dashboard!</p>
          <Button>Get Started</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
