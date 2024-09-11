import { Box, Grid } from "@mui/material";
import React from "react";
import app1 from "../../assets/images/app1.svg";
import app2 from "../../assets/images/app2.svg";

export default function Apps() {
  return (
    <Box className="apps">
      <Grid container className="container">
        <Grid item>
          <img src={app1} alt="..." />
          <h1>
            Bl<mark>ink</mark> <mark>Verify</mark>
          </h1>
          <p>A robust verification for each delivery attempt to</p>
          <p>enhance trust in its legitimacy, and reduce the reliance on</p>
          <p>human intervention.</p>
        </Grid>
        <Grid item>
          <img src={app2} alt="..." />
          <h1>
          Bl<mark>ink</mark> <mark>Secure</mark>
   
          </h1>
          <p>Sending a unique QR code to customers' phones on</p>
          <p>delivery day to ensure a seamless, secure shipping and</p>
          <p>peace of mind for both you and your customers.</p>
        </Grid>
      </Grid>
    </Box>
  );
}
