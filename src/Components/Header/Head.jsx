import React from "react";
// import Logo from "../../Assets/Images/logo (1).png";
import Logo from "../../Assets/Images/logo.jpg";
import News from "../../Assets/Images/headerb.png";
const Head = () => {
  return (
    <>
      
      <section className="head m-20">
        
        <div className=" flexSB p-20">
          <div className="logo">
             <img src={Logo} alt="" />
            
          </div>
          <div className="ad">
            <img src={News} alt="" />
          </div>
        
        </div>

      </section>
    
    </>
  );
};

export default Head;
