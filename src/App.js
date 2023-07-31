import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home.jsx";
import AboutUs from "./Pages/Aboutus/AboutUs.jsx";
import Categories from "./Pages/Categories/Categories.jsx";

import Footer from "./Components/Footer/Footer.jsx"
import Header from "./Components/Header/Header.jsx";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Aboutus" element={<AboutUs />} />
          <Route exact path="/Categories" element={<Categories />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
