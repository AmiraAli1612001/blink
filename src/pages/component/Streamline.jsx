import { Box, Grid } from "@mui/material";
import React from "react";

import img1 from "../../assets/images/orange2.svg";
import img2 from "../../assets/images/woo.svg";
import img3 from "../../assets/images/s.svg";
import img4 from "../../assets/images/b.svg";
import img5 from "../../assets/images/api.svg";

export default function Streamline() {
  return (
    <Box className="stream" sx={{width:{xs:"95vw" , md:"70vw"} , margin:"auto"}}>
      <Grid container className="container">
        <Grid item xs={12} lg={5} sx={{display:"flex", flexDirection:"column" ,justifyContent:"center",padding:"20px"}}>
          <h1>
            Streamlined <span>integration</span> of
          </h1>
          <h1>your business</h1>
          <p>Link your website using our free ready-to-use</p>
          <p>Integrations or directly via our accessible API.</p>
        </Grid>
        <Grid item xs={12} lg={6.5} sx={{display:"flex", flexDirection:{xs:"column" , lg:"row"}, gap:"20px" , minHeight:"50vh" , justifyContent:"center"}}>
          {/* <img src={img1} alt="..." /> */}
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
          <img src={img4} alt="..." />
          <img src={img5} alt="..." />
        </Grid>
      </Grid>
    </Box>
  );
}
