const Footer = (props, ref) => {
    return (
        <footer>
            <div class="featured-work-footer-wrapper">
              <div class="row expanded no-gutters">
                <div class="work-list-wrapper grid-3 col-xl-12">
                    <h2 class="title">Featured Work</h2>
                    <div class="scroll-grid">
                      <ul class="work-list" data-scroll data-scroll-call="data-stagger-up">
                        <li>
                          <a href="https://kategora.com/en/projects/nivaria-beach/">
                            <picture >
                              <img lazy width='237' height='306' 
                              src='./assets/image/nivaria-beach-footer-237x306-c.jpg'
                                alt='luxury. sea views.' />
                            </picture>
                            <h3 class="work-title">Nivaria Beach</h3>
                            <span class="description">Apartments &amp; Villas
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://kategora.com/en/projects/ura/">
                            <picture >
                              <img lazy width='237' height='306' 
                              src='./assets/image/ura-footer-237x306-c.jpg'
                                alt='Smart Building. City Center. Prime.' />
                            </picture>
                            <h3 class="work-title">URA</h3>
                            <span class="description">The city to be in.</span>
                          </a>
                        </li>
                        <li class="soon">
                          <picture >
                            <img lazy width='237' height='306' 
                            src='./assets/image/kirali-budapest-footer-237x306-c.jpg'
                              alt='Co-living Coliving Design Architecture Sustainability' />
                          </picture>
                          <h3 class="work-title">Kiraly Budapest</h3>
                          <span class="description">Available soon</span>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
              <div class="row expanded">
                <div class="col-xl-12 lower-footer">
                  <ul class="legal-list">
                    <li class="legal-item">
                      <a href="https://kategora.com/en/privacy-policy/">Privacy Policy</a>
                    </li>
                    <li class="legal-item">
                      <a href="https://kategora.com/en/legal-notice/">Legal Notice</a>
                    </li>
                    <li class="legal-item">
                      <a href="https://kategora.com/en/cookies-consent/">Cookies Consent</a>
                    </li>
                  </ul>
                  <span class="made-by-buro"><a href="https://burocratik.com" target="_blank"
                      rel="external nofollow noopener">Made
                      By Büro</a>
                    </span>
                </div>
              </div>
            </div>
          </footer>
    )
}
export default Footer;