import React, { useState } from "react"
import Head from "./Head"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setnavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setnavbar(false)}
            >
              <li>
                <Link to="/">होम</Link>
              </li>
              <li>
                <Link to="/culture">राष्ट्रीय </Link>
              </li>
              <li>
                <Link to="/politics">राज्य</Link>
              </li>
              <li>
                <Link to="/memes">फसल की खेती</Link>
              </li>
              <li>
                <Link to="/sports">उद्यानिकी</Link>
              </li>
              <li>
                <Link to="/boxed">पशुपालन</Link>
              </li>
              <li>
                <Link to="/reviews">सरकारी योजनाएं</Link>
              </li>
            </ul>
            <button className="barIco" onClick={() => setnavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header