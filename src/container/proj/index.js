import "./styled.css";
const Proj = (props, ref) => {
return (
    <div class="projects-block-wrapper">
              <div class="title-container row expanded">
                <div class="col-lg-12 text-center">
                  <span class="upper-title" data-scroll data-scroll-call="data-type-letter-spacing">Projects</span>
                  <h2 class="main-title">
                    <p data-split-reveal-type><span class="serif-light italic">A</span> <span>decade</span> <span class="serif-light italic">of</span>
                      <span>projects</span></p>
                  </h2>
                  <div class="cta-btn-wrapper" data-scroll data-scroll-call="toggleDisplay">
                    <a href="https://kategora.com/en/projects/">
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
              <div data-scroll data-scroll-call="fade-in" class="row expanded justify-content-center text-container">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <p>The <span class="serif-light italic">future</span> of housing is already here.</p>
                  <p>Alongside our co-investors and customers, we develop <span
                    class="serif-light italic">sustainable</span> buildings just as technical as they are <span
                    class="serif-light italic">attractive</span>.
                  </p>
                  <p><span class="serif-light italic">We</span> are meticulously passioned — about <span
                    class="serif-light italic">innovation</span>, about <span
                    class="serif-light italic">design</span>, about <span
                    class="serif-light italic">co-existence</span>. All the future demands.
                  </p>
                  <p>Coliving is the <span class="serif-light italic">concept</span> and our job is to <span
                    class="serif-light italic">make it real</span>.
                  </p>
                </div>
              </div>
              <div class="images-wrapper">
                <figure class="kiraly-1-image">
                  <img lazy
                    src="./assets/image/kiraly-1.jpg"
                    width="666 " height="494" />
                  <figcaption>
                    <span class="caption">kiraly budapest</span>
                  </figcaption>
                </figure>

                <figure data-scroll data-scroll-call="parallax" class="kiraly-2-image" >
                  <img
                  lazy
                    src="./assets/image/kiraly-2.jpg"
                    width="572" height="816" />
                  <figcaption>
                    <span class="caption">kiraly budapest</span>
                  </figcaption>
                </figure>

                <figure data-scroll data-scroll-call="parallax" class="ura-1-image">
                  <img
                  lazy
                    src="./assets/image/ura-1.jpg"
                    width="1178" height="562" />
                  <figcaption>
                    <span class="caption">ura</span>
                  </figcaption>
                </figure>

                <figure data-scroll data-scroll-call="parallax" class="ura-2-image">
                  <img
                  lazy
                    src="./assets/image/ura-2.jpg"
                    width="624" height="864" />
                  <figcaption>
                    <span class="caption">ura</span>
                  </figcaption>
                </figure>

                <figure data-scroll data-scroll-call="parallax" class="nivaria-1-image">
                  <img
                  lazy
                    src="./assets/image/nivaria-1.jpg"
                    width="680" height="456" />
                  <figcaption>
                    <span class="caption">nivaria</span>
                  </figcaption>
                </figure>

                <figure data-scroll data-scroll-call="parallax" class="nivaria-2-image">
                    <img
                    lazy
                     src="./assets/image/nivaria-2.jpg"
                      width="954" height="534" />
                    <figcaption>
                      <span class="caption">nivaria</span>
                    </figcaption>
                </figure>
              </div>
            </div>
)
}
export default Proj;