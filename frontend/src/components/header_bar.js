import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import "./style.css";

class HeaderBar extends React.Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn btn-primary"
          >
            <i className="fa fa-bars" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Welcome! Apzapps
                </a>
              </li>
              <li className="nav-item">
                <Nav.Link href="/" onClick={this.logOut}>Logout</Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
     
      
    );
  }
}

export default HeaderBar;
