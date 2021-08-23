const Header = ( props, ref) => {
return (
    <header class="page-header">
          <div class="home-header-wrapper">

            <span class="background-dark"></span>

            <div class="row expanded">
              <div class="col-lg-12 text-center">
                <span class="upper-title">Welcome</span>
              </div>
            </div>

            <div class="text-wrapper row expanded justify-content-center">
              <div class="col-lg-12 text-center">
                <h2 class="text">
                  <p><span class="serif-light italic">Smart</span> living starts with</p>
                  <p>smart <span class="serif-light italic">building</span></p>
                </h2>
                <button class="continue-btn">
                  <span class="bg"></span>
                    <span class="label">Continue</span>
                    <div class="icon-container">
                      <svg class="icon" width="35" height="11" viewBox="0 0 35 11" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <line y1="5.5" x2="34" y2="5.5" stroke="#232323" />
                        <path d="M30 1L34.5 5.5L30 10" stroke="#232323" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </div>
                </button>
              </div>
            </div>

            <div id="introVideo" class="image-wrapper">
              <div class="header-video-container">
                <video class="header-video" autoplay loop muted>
                  <source src="./assets/audio-video/kategora-loop-finalissimo.mp4"
                    type="video/mp4" />
                </video>
              </div>
              <div class="text-wrapper row expanded align-center">
                <div class="col-lg-12 text-center">
                  <h2 class="text">
                    <p><span class="serif-light italic">Smart</span> living starts with</p>
                    <p>smart <span class="serif-light italic">building</span></p>
                  </h2>
                  <button class="play-video">
                      <span class="bg"></span>
                      <span class="label">Play full movie</span>
                      <span class="icon-container">
                        <svg class="icon" width="14" height="17" viewBox="0 0 14 17" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8.5L1 15V2L12 8.5Z" stroke="#232323" stroke-width="1.5" />
                        </svg>
                      </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
)
}
export default Header;