import React, { Component } from "react";
import Logo from "../../assets/img/logo.svg";
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="logo" src={Logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" 

            style={{ 'background' : "#ea1d63" , "color" : "white"}}
          >
            <i class="icon ion-android-menu"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Furniture
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Appliances
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Packages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search" style={{ paddingRight: "2%" }}>
              <div className="search-box">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <a type="submit">
                  <i class="icon ion-android-search"></i>
                </a>
              </div>
            </form>
            <ul class="two-menu navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="cart nav-link position-relative" href="#">
                  Cart
                  <span class="custom-badge position-absolute translate-middle bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
