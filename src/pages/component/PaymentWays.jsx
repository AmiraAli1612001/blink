import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import blue from "../../assets/images/Circular - Blue.png";
import vise from "../../assets/images/visa.png";
import ornage from "../../assets/images/orange.png";
import flask from "../../assets/images/flask.png";
import master from "../../assets/images/master.png";
import app from "../../assets/images/mobile.svg";

export default function PaymentWays() {
  return (
    <Box
      className="payment"
      sx={{ width: { xs: "90vw", md: "80vw", lg: "60vw" }, margin: "auto", padding:{xs:"30px" , lg:"50px"} }}
    >
      <Grid container  sx={{height:"100%"}}>
        <Grid item  xs={12} md ={6.5}  sx={{height:"100%"}}>
          {/* <img src={blue} alt="..."  style={{marginBottom:"30px" , width:"100px"}}/> */}
          <h1>Card payment now</h1>
          <h1>available upon delivery</h1>
          <p>No Cash? No Worries 😉 It is Secure, Convenient, and Cash-Free</p>
        </Grid>
        <Grid item xs={12} md ={4} sx={{display:"flex"  , justifyContent:"flex-end" , alignItems:"flex-end" }}>
          <Box sx={{display:"flex"  , justifyContent:"flex-end" , flexDirection:"row-reverse", alignItems:"flex-end" }}>
            <Box >
              <Paper  className="paper">
                <img src={vise} alt="..." />
              </Paper>
              <Paper className="paper">
                <img src={master} alt="..." />
              </Paper>
            </Box>
            <Box>
              <Paper className="paper">
                <img src={ornage} alt="..." />
              </Paper>
              <Paper className="paper">
                <img src={flask} alt="..." />
              </Paper>
            </Box>
            <img src={app} alt="..." className="app" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
