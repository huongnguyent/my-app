import React, { useEffect } from "react";
import Event from "./event/index";
import Specials from "./specials/index";
import About from "./abount/index";
import Menu from "./menu/index";
import WhyUs from "./whyUs/index";
import Header from "./header";
import Footer from "./footer";
import MainHeader from "./main-header";
import { connect } from "react-redux";
import Hero from "./hero";
 
 function Overview(props) {
     return (
        <div>
          <Hero />
          <main id="main">
          <About />
          <WhyUs />
          <Menu />
          <Specials />
          <Event />

          </main>
            
         </div>
     )
 } 
 export default connect(
    (state) => ({
      listTruyen: state.test.listTruyen || [],
    }),
    ({
      test: {
        getTruyen,
     },
    }) => {
      return {
        getTruyen
      };
    }
  )(Overview);