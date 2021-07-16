import React from "react";
import { Navbar, Container } from 'react-bootstrap';
import getiT from "../static/getiT.svg"
import SearchIcon from '@material-ui/icons/Search'

function Searchbar() {
  return (
    <Container>

      <div className="nav-div">

        <Navbar bg="white" expand="lg">
          <Container className="searchContainer">

            <Navbar.Brand href="#home">
              <img src={getiT} alt="cloud-image" height={75} width={150} />
            </Navbar.Brand>

            <div class="input-group search-bar">
              <input name="searchtext" value="" class="form-control" type="text" placeholder="Search" />
              <span class="input-group-btn">
                <button class="btn btn-default" type="submit" id="addressSearch">
                  <span class="icon-search"></span>
                  <SearchIcon />
                </button>
              </span>
            </div>

          </Container>

          <Navbar.Brand className="login" href="#">Login</Navbar.Brand>
          <Navbar.Brand className="register" href="#">Register</Navbar.Brand>
        </Navbar>

      </div>

    </Container>

  );
}

export default Searchbar