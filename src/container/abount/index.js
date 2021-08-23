import "./styled.css";
const About = (props, ref) => {
return (
    <div class="about-block-wrapper">
              <div class="image-container">
                <div class="block-bg-cover">
                  <picture >
                    <img lazy width='1700' height='1075' class='canvas-img element-cover'
                      src='./assets/image/kategora-homepage-office-1700x1075-c.jpg'
                      alt='Meeting room team work space creating' />
                  </picture>
                </div>
                <picture>
                  <img class='floating-img' width='348' height='589' data-scroll data-scroll-call="parallax"
                  lazy src='./assets/image/kategora-homepage-office-02-348x589-c.jpg' />
                </picture>
                <div class="title-container">
                  <div class="inner">
                    <span class="upper-title" data-scroll data-scroll-call="data-type-letter-spacing">About</span>
                    <div class="slide-title-container">
                      <h2>
                        <span class="word">Our Culture&nbsp;</span>
                      </h2>
                      
                      <h2>
                        <span class="word">&nbsp;Our Culture</span>
                      </h2>
                    </div>
                    <div class="cta-btn-wrapper" data-scroll data-scroll-call="toggleDisplay">
                      <a href="https://kategora.com/en/about/">
                        <span class="background"></span>

                        <span class="round-text-wrapper">
                          <img lazy src="./assets/image/circle-text2.png" />
                        </span>
                        <div class="icons-container">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120" preserveAspectRatio="xMidYMid meet" class="trans">
                            <defs>
                              <clipPath id="__lottie_element_2"><rect width="120" height="120" x="0" y="0"></rect></clipPath>
                            </defs>
                            <g clip-path="url(#__lottie_element_2)">
                            <g transform="matrix(1,0,0,1,23.8489990234375,37.447998046875)" opacity="1" class="d-block">
                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                              <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="2" d=" M1,25.97800064086914 C1,25.97800064086914 65.06900024414062,25.97800064086914 65.06900024414062,25.97800064086914"></path></g>
                            <g opacity="1" transform="matrix(1,0,0,1,52.26599884033203,15.48900032043457)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="2" d=" M-12.802000045776367,-10.48900032043457 C-12.802000045776367,-1.0110000371932983 -7.64900016784668,10.48900032043457 12.802000045776367,10.48900032043457"></path></g>
                            <g opacity="1" transform="matrix(1,0,0,1,52.26599884033203,36.46699905395508)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="2" d=" M-12.802000045776367,10.48900032043457 C-12.802000045776367,1.0110000371932983 -7.64900016784668,-10.48900032043457 12.802000045776367,-10.48900032043457"></path></g>
                          </g></g>
                        </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-container row expanded">
                <div class="col-xl-7 col-lg-6 col-md-10 col-sm-12 order-md-2">
                    <picture class="left-img-picture" data-scroll data-scroll-call="scale-center">
                      <img lazy width='923' height='589' 
                        src='./assets/image/kategora-homepage-team-923x589-c.jpg'
                        alt='Team meeting enjoyable time coworkers coworking' />
                    </picture>
                </div>
                <div
                    class="col-xl-4 offset-xl-1 col-lg-5 col-md-10 offset-md-3 offset-sm-0 col-sm-12 order-md-1">
                    <p>Our architecture encourages co-existence. So does our business philosophy. We have abolished
                      barriers of hierarchy and departmentalization to work as a single team. We believe in full
                      transparency — and of course, that entails our clients.</p>
                    <p>Kategora was born in Bilbao in 2006 but experienced its initial growth spur in Hungary and
                      Poland. As we looked to invest in emerging markets, we noticed these wonderful countries had low
                      real estate prices, low unemployment rates, a young population, and low leverage rates when
                      compared to Spain.</p>
                    <ul class="statistics-list" data-scroll data-scroll-call="stagger-in">
                      <li class="stagger-item">14 Years</li>
                      <li class="stagger-item">3 Countries</li>
                      <li class="stagger-item">+7% Net Yields</li>
                      <li class="stagger-item">400 Investors</li>
                      <li class="stagger-item">800 Actives</li>
                      <li class="stagger-item">160M€ GAV</li>
                    </ul>
                  </div>
              </div>
              <div class="big-number-container row expanded">
                <div class="col-xl-12">
                  <span class="number"><span data-scroll data-scroll-call="data-scale-down-type">3.427</span></span>
                  <span class="label">Accommodation Places</span>
                </div>
              </div>
            </div>
)
}
export default About;