import React from "react";
import Index from "./component/Index";
import { Box } from "@mui/material";
import Sectiontwo from "./component/Sectiontwo";
import PaymentWays from "./component/PaymentWays";
import Computer from "./component/Computer";
import Apps from "./component/Apps";
import Services from "./component/Services";
import Streamline from "./component/Streamline";
import Dream from "./component/Dream";

export default function Home() {
  return (
    <Box>
      <Index />
      <Sectiontwo />
      <PaymentWays />
      {/* <Computer /> */}
      {/* <Apps /> */}
      <Services />
      <Streamline />

      <Dream />
    </Box>
  );
}
