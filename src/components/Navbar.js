import React, { Component } from "react";
import {Link} from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
          <div className="container-fluid" style={{ backgroundColor: '#1F0985' }}>
            <a className="navbar-brand" href="/" style={{ textDecorationLine: 'underline' }}>
              News Cheetah
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color:"white"}}>
              <li class="nav-item active">
              <Link to="/" className="nav-link mx-2" >
                    General
                  </Link>
              </li>
              <li class="nav-item active">
              <Link to="/business" className="nav-link mx-2" >
                    Business
              </Link>
              </li>
                  <li class="nav-item active"><Link to="/sports" className="nav-link mx-2">
                    Sports
                  </Link></li>
                  <li class="nav-item active"><Link to="/science" className="nav-link mx-2">
                    Science
                  </Link></li>
                  <li class="nav-item active"><Link to="/technology" className="nav-link mx-2">
                    Technology
                  </Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;