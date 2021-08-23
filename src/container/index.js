import React, { useEffect } from "react";
import NewsLetter from "./newsletter/index";
import Sustainability from "./sustainability/index";
import About from "./abount/index";
import Proj from "./proj/index";
import Video from "./playFullVideo/index";
import Header from "./header";
import Footer from "./footer";
import MainHeader from "./main-header";
 
 function Overview(props) {
     return (
        <div id="homePage" class="disableScroll">
            <MainHeader />
            <div class="page-main">
            <div class="home-page">
             <Header />
             <Video />
             <Proj />
             <About />
             <Sustainability />
             <NewsLetter />
             <Footer />
         </div>
        </div>
        </div>
     )
 } 
 export default Overview;