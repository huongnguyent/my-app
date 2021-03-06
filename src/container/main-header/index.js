import "./styled.css"
const MainHeader = (props, ref) => {
    return (
        <div>
            <audio id="backgroundAudio" src="./assets/audio-video/transversal.mp3" loop></audio>
            <audio id="birdAudio" src="./assets/audio-video/header.mp3" loop></audio>
            <div class="main-header-wrapper">
                <a class="logo" href="./index.html">
                    <svg width="115" height="66" viewBox="0 0 115 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Kategora Logo</title>
                        <path class="kategora-type" d="M13.9035 57.0949L12.4925 58.547V63.0123H10V50.1492H12.4925V55.2379L17.2756 50.1492H20.5573L15.6068 55.2939L21.0144 63.0123H17.9001L13.9035 57.0949Z" fill="#232323" />
                        <path class="kategora-type" d="M29.8101 60.1616H24.8436L23.7993 63.0097H21.2324L26.1617 50.1465H28.4894L33.4186 63.0097H30.8517L29.8101 60.1616ZM29.0421 58.0488L27.3388 53.4183L25.6355 58.0488H29.0421Z" fill="#232323" />
                        <path class="kategora-type" d="M36.004 52.2992H32.1377V50.1492H42.3655V52.2992H38.4992V63.0123H36.0067V52.2992H36.004Z" fill="#232323" />
                        <path class="kategora-type" d="M43.627 50.1492H52.2046V52.2992H46.1195V55.1287H50.9956V57.2974H46.1195V60.8436H52.4066V63.0123H43.627V50.1492Z" fill="#232323" />
                        <path class="kategora-type" d="M53.25 56.5781C53.25 52.7202 55.9445 50 59.739 50C62.8002 50 65.1997 51.7451 65.6594 54.2815L63.1669 54.7957C62.8374 53.1598 61.4636 52.1501 59.739 52.1501C57.4113 52.1501 55.7611 53.8392 55.7611 56.5781C55.7611 59.1864 57.3927 60.9875 59.739 60.9875C61.7001 60.9875 63.0739 59.8658 63.1855 58.158H58.9897V56.1358H65.8428V57.1269C65.8428 60.7477 63.4061 63.1535 59.7576 63.1535C55.9418 63.1588 53.25 60.4386 53.25 56.5781Z" fill="#232323" />
                        <path class="kategora-type" d="M67.1387 56.5781C67.1387 52.7735 69.8889 50 73.6437 50C77.3824 50 80.1327 52.7735 80.1327 56.5781C80.1327 60.3827 77.3824 63.1562 73.6437 63.1562C69.8889 63.1589 67.1387 60.3827 67.1387 56.5781ZM77.6216 56.5781C77.6216 54.0231 75.9714 52.1501 73.6437 52.1501C71.3159 52.1501 69.6471 54.0257 69.6471 56.5781C69.6471 59.1331 71.3159 60.9875 73.6437 60.9875C75.9714 60.9901 77.6216 59.1331 77.6216 56.5781Z" fill="#232323" />
                        <path class="kategora-type" d="M89.5696 63.0097L86.5085 57.7371H84.4916V63.0097H81.9991L81.9805 50.1465H86.9283C89.4394 50.1465 91.071 51.6359 91.071 53.9511C91.071 55.4032 90.319 56.6341 89.0541 57.2602L92.4634 63.0123H89.5696V63.0097ZM84.4942 55.587H86.5457C87.8291 55.587 88.5625 54.9795 88.5625 53.9511C88.5625 52.9227 87.8291 52.2966 86.5457 52.2966H84.4942V55.587Z" fill="#232323" />
                        <path class="kategora-type" d="M101.391 60.1616H96.4247L95.3804 63.0097H92.8135L97.7427 50.1465H100.07L105 63.0097H102.433L101.391 60.1616ZM100.621 58.0488L98.9172 53.4183L97.2113 58.0488H100.621Z" fill="#232323" />
                        <path d="M90.9776 28.5106V30.0941C83.0227 26.5561 68.0554 18.9286 56.8388 7.3921C45.6286 18.9221 30.6678 26.5496 22.7129 30.0844V28.5009C45.1268 16.4581 56.8388 0 56.8388 0C56.8388 0 68.554 16.471 90.9776 28.5106Z" fill="#232323" />
                        <path d="M90.9776 31.5616V33.0516C81.736 30.765 63.6196 25.9336 56.8774 21.6667C50.1191 25.9433 31.9319 30.7875 22.7129 33.0677V31.5809C40.3179 25.8982 55.7966 15.3615 56.8452 14.6455V14.6036C56.8452 14.6036 56.8678 14.6197 56.8774 14.6262C56.8871 14.6197 56.9031 14.6036 56.9031 14.6036V14.6455C57.9518 15.3647 73.3951 25.8756 90.9776 31.5616Z" fill="#232323" />
                        <path d="M90.9776 34.6352V36.1316H22.7129V34.6352C41.4887 32.2647 56.6683 28.8234 56.8388 28.7879V28.7815C56.8388 28.7815 56.8388 28.7815 56.8452 28.7815V28.7879C57.0157 28.8266 72.2017 32.2647 90.9776 34.6352Z" fill="#232323" />
                    </svg>
                </a>
            </div>
            <div class="menu-wrapper">
                <div class="inner-menu">
                    <div class="language-wrapper">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 15C11.6168 15 15 11.6576 15 7.5C15 3.38315 11.6576 0 7.5 0C3.34239 0 0 3.38315 0 7.5C0 11.6168 3.38315 15 7.5 15ZM0.855978 7.90761H3.13859C3.22011 10.3533 3.9538 12.4728 5.05435 13.6957C2.69022 12.7582 1.01902 10.5571 0.855978 7.90761ZM7.5 0.855978C9.375 0.855978 10.9239 3.66848 11.0462 7.09239H3.9538C4.07609 3.66848 5.66576 0.855978 7.5 0.855978ZM11.087 7.90761C10.9647 11.3315 9.375 14.144 7.54076 14.144C5.70652 14.144 4.11685 11.3315 3.99457 7.90761H11.087ZM9.94565 13.6957C11.0462 12.4321 11.7799 10.3533 11.8614 7.90761H14.144C14.0217 10.5571 12.3098 12.7582 9.94565 13.6957ZM14.1848 7.09239H11.9022C11.8207 4.64674 11.087 2.52717 9.98641 1.30435C12.3098 2.20109 14.0217 4.44293 14.1848 7.09239ZM5.05435 1.30435C3.9538 2.56793 3.22011 4.64674 3.13859 7.09239H0.855978C1.01902 4.44293 2.69022 2.20109 5.05435 1.30435Z"
                                fill="white" />
                        </svg>
                        <ul class="language-links">
                            <li>
                                <a href="https://kategora.com/">es</a>
                            </li>
                            <li class="active">
                                <a href="https://kategora.com/en/">en</a>
                            </li>
                        </ul>
                    </div>

                    <ul class="main-links">
                        <li class="main-link active">
                            <a href="./index.html">Home</a>
                        </li>
                        <li class="main-link">
                            <a href="./page/About.html">About</a>
                        </li>
                        <li class="main-link">
                            <a href="./page/Project.html">Projects</a>
                        </li>
                        <li class="main-link">
                            <a href="./page/Experts.html">Expertise</a>
                        </li>
                        <li class="main-link">
                            <a href="./page/Insights.html">Insights</a>
                        </li>
                    </ul>
                    <button class="menu-btn">
                        <span class="burguer"><span class="top"></span><span class="bottom"></span></span>
                        <span class="label">M<br />e<br />n<br />u</span>
                    </button>
                    <span class="menu-btn-hitzone"></span>
                </div>
                <button class="audio-btn-wrapper hide-all opa" >
                    <div class="audio-btn">
                        <span class="background"></span>
                        <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="icon" fill-rule="evenodd" clip-rule="evenodd" d="M0.9375 2.39538H3.1875L5.25 0.137058C5.475 -0.0843455 6 -0.0843455 6 0.491304V8.5504C6 9.08177 5.475 9.08177 5.25 8.86036L3.1875 6.64633H0.9375C0.4125 6.64633 0 6.15924 0 5.53931V3.45811C0 2.88246 0.4125 2.39538 0.9375 2.39538Z" fill="white"></path>
                            <path class="sound-icon" d="M8 2C8.66667 2.66667 10.5 4.5 8 7" stroke="white"></path>
                        </svg>
                        <span class="line-wrapper"><span class="line"></span></span>
                    </div>
                </button>
            </div>
        </div>
    )
}
export default MainHeader;