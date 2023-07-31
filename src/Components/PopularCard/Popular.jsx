import React from "react";
import "./Popular.css";
import img1 from "../../Assets/Images/farming6.png";
import img2 from "../../Assets/Images/farming7.png";
import Headline from "./Headline";
function Popular() {
  return (
    <>
      <div className="popular-headline-container">
        <div className="popular">
          {/* Heading */}
          <div className="heading">
            <p>कृषि तकनीकें </p>
          </div>
          <div className="cardContainer">
            {/* <Slider {...settings}> */}
            {/* Card 1 */}
            <div className="popularCard">
              <img src={img1} alt="" />
              <div className="category">
                <h6> किसान भविष्य </h6>
              </div>
              <div className="content">
                <h5>
                  स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की
                  आवश्यकता है...
                </h5>
                <p>
                  कृषि यंत्रीकरण योजना के लिए आवंटित धनराशि में लगातार कटौती की
                  जा रही है। FY23 में आवंटित बजट 2019-20 में ₹ 217.7 मिलियन के
                  मुकाबले ₹158.6 मिलियन था।
                </p>
                {/* <p>
                  <span> </span> 19. February 2023
                </p> */}
              </div>
            </div>
            {/* Card 1 End */}

            {/* Card 2 */}
            <div className="popularCard">
              <img src={img2} alt="" />
              <div className="category">
                <h6> किसान भविष्य </h6>
              </div>
              <div className="content">
                <h5>
                  स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की
                  आवश्यकता है...
                </h5>

                <p>
                  कृषि यंत्रीकरण योजना के लिए आवंटित धनराशि में लगातार कटौती की
                  जा रही है। FY23 में आवंटित बजट 2019-20 में ₹ 217.7 मिलियन के
                  मुकाबले ₹158.6 मिलियन था।
                </p>
                {/* <p>
                  <span> </span> 19. February 2023
                </p> */}
              </div>
            </div>
            {/* Card 2 End */}
            {/* </Slider> */}
          </div>
        </div>
        <Headline />
      </div>
    </>
  );
}

export default Popular;
