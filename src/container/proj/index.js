import "./styled.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
const Proj = (props, ref) => {
  useEffect(() => {
    props.getTruyen();
  }, []);
  return (
    <div class="bl-wrapper">
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
      <div class="bao">
        <img class="img" lazy
          src="./assets/image/kiraly-1.jpg"
          />
        <img class="img"
          lazy
          src="./assets/image/kiraly-2.jpg"
          />
        <img class="img"
          lazy
          src="./assets/image/ura-1.jpg"
          />
        <img class="img"
          lazy
          src="./assets/image/nivaria-2.jpg"
           />
        <img class="img"
          lazy
          src="./assets/image/nivaria-1.jpg"
          />
        <img class="img"
          lazy
          src="./assets/image/ura-2.jpg"
           />
           <p class=" serif-light italic right-text item">Chúng tôi sẽ đem đến cho bạn giá trị cuộc sống đích thực!</p>
      </div>
      
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
)(Proj);