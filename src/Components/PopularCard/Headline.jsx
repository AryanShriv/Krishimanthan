import React from "react";
import "./Headline.css";
import img1 from "../../Assets/Images/farming8.png";

function Headline() {
  return (
    <div className="headline-container">
      <div className="heading">
        <p>मुख्य समाचार</p>
      </div>

      <div className="headline-card-container">
        {/* card 1 */}
        <div className="headline-card">
          <div className="headline-img">
            <img src={img1} alt="" />
          </div>
          <div className="headline-content">
            <h6>
              सरकार ने सब्सिडी वाले टमाटरों की कीमत घटाकर ₹70 प्रति किलोग्राम कर
              दी
            </h6>
          </div>
        </div>

        {/* card 2 */}
        <div className="headline-card">
          <div className="headline-img">
            <img src={img1} alt="" />
          </div>
          <div className="headline-content">
            <h6>
              सरकार ने सब्सिडी वाले टमाटरों की कीमत घटाकर ₹70 प्रति किलोग्राम कर
              दी
            </h6>
          </div>
        </div>

        {/* card 3 */}
        <div className="headline-card">
          <div className="headline-img">
            <img src={img1} alt="" />
          </div>
          <div className="headline-content">
            <h6>
              सरकार ने सब्सिडी वाले टमाटरों की कीमत घटाकर ₹70 प्रति किलोग्राम कर
              दी
            </h6>
          </div>
        </div>

        {/* card 4 */}
        <div className="headline-card">
          <div className="headline-img">
            <img src={img1} alt="" />
          </div>
          <div className="headline-content">
            <h6>
              सरकार ने सब्सिडी वाले टमाटरों की कीमत घटाकर ₹70 प्रति किलोग्राम कर
              दी
            </h6>
          </div>
        </div>

        {/* card 5 */}
        <div className="headline-card">
          <div className="headline-img">
            <img src={img1} alt="" />
          </div>
          <div className="headline-content">
            <h6>
              सरकार ने सब्सिडी वाले टमाटरों की कीमत घटाकर ₹70 प्रति किलोग्राम कर
              दी
            </h6>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Headline;
