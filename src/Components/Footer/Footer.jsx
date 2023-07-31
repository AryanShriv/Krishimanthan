import React from "react";
import "./Footer.css";
import news from "../../Assets/Images/farming8.png";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-section">
          <h1>KrishiManthan</h1>
          <p>
          कृषिमंथन: खेती से जुड़ी सभी खबरें एक स्थान पर। अद्यतित रहें, उत्पादन में सुधार करें और हमारे साथ उन्नति पाएं!
          </p>
          <div>
            <p>krishimanthan@gmail.com</p>
            <p>+91 9485468410</p>
          </div>
        </div>

        <div className="footer-news">
          <h4>WEATHER</h4>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>सुस्त मानसून से धान की पैदावार कम हो सकती है</p>
          </div>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>सुस्त मानसून से धान की पैदावार कम हो सकती है</p>
          </div>
        </div>

        <div className="footer-news">
          <h4>WEATHER</h4>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>सुस्त मानसून से धान की पैदावार कम हो सकती है</p>
          </div>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>सुस्त मानसून से धान की पैदावार कम हो सकती है</p>
          </div>
        </div>

        <div className="footer-labels">
          <h4>LABELS</h4>
          <ul>
            <li>Weather</li>
            <li>Agriculture</li>
            <li>Technology</li>
            <li>Fertilizer</li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <p>© All Rights Reserved</p>
        <p>
          Made With <span>&#x2764;</span> by Agile Support
        </p>
      </div>
    </div>
  );
}

export default Footer;
