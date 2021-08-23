const Sustainability = (props, ref) => {
    return (
        <div>
            <div class="sustainability-block-wrapper dark-zone">
              <div class="image-container">
                <div class="block-bg-cover">
                  <video class="sustainability-bg element-cover" preload autoplay playsinline loop muted>
                    <source src="./assets/audio-video/forest-low.mp4"
                      type="video/mp4" />
                  </video>
                </div>

                <picture >
                  <img class="floating-img" width='348' height='589' data-scroll data-scroll-call="parallax"
                  lazy  src='./assets/image/sustainability-2-348x589-c.jpg' />
                </picture>
                <div class="title-container">
                  <div class="inner">
                    <span class="upper-title" data-scroll data-scroll-call="data-type-letter-spacing">Insights</span>
                    <div class="slide-title-container">
                      <h2>
                        <span class="word">Sustainability&nbsp; &nbsp;</span>
                      </h2>
                      <h2>
                        <span class="word">&nbsp; &nbsp;Sustainability</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-container row expanded" data-scroll data-scroll-call="fade-in">
                <div
                  class="col-xl-6 offset-lg-5 col-md-10 offset-md-2 col-sm-12"
                >
                  <h3>Kategora is committed to give back to the mother nature what it's hers.</h3>
                  <p>Sustainability is no longer a goal. It's a necessity. It's work. That’s why we spare no effort to
                    design buildings that allow for the most efficient use of resources, minimizing consumption,
                    emissions, and even maintenance costs. It’s not just a way to do better. It’s also a way to do
                    good.</p>
                  <p>We think ahead by design. 12 years ago we were already involved in full chain development,
                    handling the concept, design, construction, and management of every property. Sustainability as a
                    prerequisite is something we have been working almost from the get-go. Our success lies in our
                    ability to predict rather than to react to change.</p>
                </div>
              </div>
              <div class="more-insights row expanded collapse">
                <div class="col-xl-10 offset-xl-2 col-lg-12" data-scroll data-scroll-call="stagger-in" >
                  <span class="insights-title">Read more about it</span>
                  <div class="scroll-grid">
                    <ul class="insights-list"data-scroll data-scroll-call="data-stagger-up">
                      <li>
                        <a href="https://kategora.com/en/insights/boosting-the-build-to-rent-market/">
                          <div class="image-wrapper">
                            <div class="block-bg-cover">
                              <picture >
                                <img class="element-cover" lazy width='430' height='473' 
                                  src='https://kategora.com/wp-content/uploads/fly-images/235/header-image-430x473-c.jpg' />
                              </picture>
                            </div>
                          </div>
                          <div class="info-container">
                            <div class="left-col">
                              <h4 class="title">Boosting the &#8216;Build to Rent&#8217; Market</h4>
                              <span class="author">Kepa Arpaiz</span>
                              <span class="reading-time">2 September 2020 · 2 mins read</span>
                            </div>
                            <div class="right-col">
                              <span class="category">Document</span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="https://kategora.com/en/insights/boosting-the-build-to-rent-market/">
                          <div class="image-wrapper">
                            <div class="block-bg-cover">
                              <picture>
                                <img lazy width='430' height='473' class='element-cover'
                                src='assets/image/iStock-657200756-1-430x473-c.jpg'
                                  alt='Co-living Coliving Design Architecture Sustainability' />
                              </picture>
                            </div>
                          </div>
                          <div class="info-container">
                            <div class="left-col">
                              <h4 class="title">The 5 Pillars that point to Passivhaus as the future of real estate</h4>
                              <span class="author">Kepa Arpaiz, Kategora</span>
                              <span class="reading-time">2 September 2020 · 2 mins read</span>
                            </div>
                            <div class="right-col">
                              <span class="category">Article</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
export default Sustainability;