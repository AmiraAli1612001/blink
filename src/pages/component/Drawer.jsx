import { Box, Grid } from "@mui/material";
import React from "react";
import logo from "../../assets/images/navlogo.972e5b91.svg";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Drawer(props) {
  let links = [
    {
      link: "Our Products",
      path: "/#products",
    },
    {
      link: "Why ShipBlu?",
      path: "/#services",
    },
    {
      link: "Our Blog",
      path: "#",
    },
    {
      link: "Support",
      path: "#",
    },
    {
      link: "Track Your Shipment",
      path: "#",
    },
  ];
  return (
    <Box className="drawer" sx={{left: props.close ? "-100%" : "0px", zIndex:"1000"}}>
      <Box className="container">
        <Box sx={{display:"flex" , justifyContent:"space-between", alignItems:"center"}}>
          <Box >
            <img src={logo} alt="..." style={{ width: "160px" }} />
          </Box>
          <Box>
            {" "}
            <IoCloseSharp style={{ fontSize: "22px", cursor: "pointer" }} onClick={()=>{
                props.setClose(true)
            }} />
          </Box>
        </Box>

        <Box sx={{display:"flex" , flexDirection:"column" , gap:"30px"}}>
          {links.map((item, index) => {
            return (
              <HashLink key={index} to={item.path}>
                {item.link}
              </HashLink>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
