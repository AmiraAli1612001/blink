import { Box, Grid } from "@mui/material";
import React from "react";
import person from "../../assets/images/person.svg";
export default function Dream() {
  return (
    <Box
      className="dream"
      sx={{ width: { xs: "100vw", md: "80vw" }, margin: "auto", padding:{xs:"30px", md:"60px"} }}
    >
      <Grid container sx={{display:"flex" , flexWrap:"wrap"}}>
        <Grid item xs={12} lg={5.5}  sx={{display:"flex", justifyContent:"center" , flexDirection:"column"}}>
          <h1>Ready to build your dream</h1>
          <h1>eCommerce Business?</h1>
        </Grid>
        <Grid item xs={12} lg={5.5} sx={{display:"flex", justifyContent:"flex-end"}}>
          <img src={person} alt="..."  />
        </Grid>
      </Grid>
    </Box>
  );
}
