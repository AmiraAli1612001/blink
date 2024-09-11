import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Drawer from "./Drawer";
import { HashLink } from "react-router-hash-link";

export default function Header() {
let [close,setClose] = useState(true)
    let links = [
    {
      link: "About",
      path: "/#products",
    },
    {
      link: "Services",
      path: "/#services",
    },
    {
      link: "Binfits",
      path: "#",
    },
    {
      link: "Contact",
      path: "#",
    },
    // {
    //   link: "Track Your Shipment",
    //   path: "#",
    // },
  ];
  return (
    <Box className="header">
        <Drawer close={close} setClose={setClose}/>
      <Grid container className="contanier">
        <Grid item xs={9.9} lg={1.7} sx={{display:"flex" , justifyContent:{xs:"flex-start" , lg:"center"}}}>
          <img
            src={logo}
            alt="..."
            style={{ maxWidth: "160px" }}
          />
          {/* <h1 style={{color:"#1b5bfd"}}>BLINK</h1> */}
          
        </Grid>
        <Grid
          item
          className="links"
          lg={10}
          sx={{ display: { xs: "none", lg: "flex" } ,transform:"translateX(-9%)", justifyContent:"center"}}
        >
          {links.map((item, index) => {
            return (
              <HashLink key={index} to={item.path} smooth={true}>
                {item.link}
              </HashLink>
            );
          })}
        </Grid>
        <Grid item xs={2} sx={{ display: { xs: "flex", lg: "none" } }} onClick={()=>{

            setClose(false)
        }}>
          <FaBars style={{fontSize:"24px", cursor:"poniter"}} />
        </Grid>
      </Grid>
    </Box>
  );
}
