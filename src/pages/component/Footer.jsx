import { Box, Grid } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function footer() {
  let company = [
    {
      link: "FAQ",
      path: "#",
    },
    {
      link: "About US",
      path: "#",
    },
    {
      link: "Contact US",
      path: "#",
    },
    {
      link: "Social Media Seller",
      path: "#",
    },
    {
      link: "Driver Outsourcing",
      path: "#",
    },
    {
      link: "Technology",
      path: "#",
    },
  ];
  let legal = [
    {
      link: "Terms & Conditions",
      path: "#",
    },
    {
      link: "Privacy Policy",
      path: "#",
    },
  ];
  let style = {
    footer: {
      backgroundColor: "#0a3266",
      display: "flex",
      justifyContent: "center",
      padding: { xs: "40px 20px", md: "50px" },
    },
    container: {
      display: "flex",
      justifyContent: "center",
      gap:"15px"
    },
    item: {
      marginTop: { xs: "20px", md: "0px" },
    },
  };
  return (
    <Box className="footer" sx={style.footer}>
      <Grid container sx={style.container}>
        <Grid
          item
          xs={12}
          md={4}
          lg={2.6}
          className="grid-item"
          sx={style.item}
        >
          {/* <img src={logo} alt="..." /> */}
          <h1 style={{ color: "white" }}>BLINK</h1>
          <Box>
            <p>© Copyright 2024 - ShipBlu Technology.</p>
            <p>All Rights Reserved.</p>
            <p>
              125, 1st Floor, Iridium Building Umm Suqeim Road Al Barsha 1 Dubai
              U.A.E
            </p>
          </Box>
          <Box className=" grid-icons">
            <FaLinkedinIn />
            <BsInstagram />
            <FaFacebookF />
            <FaXTwitter />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={2.6}
          className="grid-item"
          sx={style.item}
        >
          <h2>Company</h2>
          <Box>
            {company.map((item, index) => {
              return (
                <Link key={index} to={item.path}>
                  {item.link}
                </Link>
              );
            })}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={2.6}
          className="grid-item"
          sx={style.item}
        >
          <h2>Legal</h2>
          <Box>
            {legal.map((item, index) => {
              return (
                <Link key={index} to={item.path}>
                  {item.link}
                </Link>
              );
            })}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={2.6}
          className="grid-item"
          sx={style.item}
        >
          <h2>Contact Us</h2>
          <h3>For sales inquiries</h3>
          <Link>Enterprise Price Plans</Link>
          <h3>For customer service</h3>
          <Link> Support@blinkds.com</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
