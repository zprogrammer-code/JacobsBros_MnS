import React from "react";
import { Navbar, Nav } from "react-bootstrap";


const Jbnavbar = () => {

return(
<>
<Navbar className="navbar"  >


<Navbar.Brand href="#home" className="logo">
  
  <img
    alt=""
    src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1703808276/Untitled_drawing_3_bg3ea2.png"
    width="130"
    height="130"
    className="brand"
  />{' '}
  <div className="title-center">
  </div>
</Navbar.Brand>
    <div className="phone">719-338-4333</div>
    
 
       
  <Nav className="nav-links">
            <Nav.Link href="/house" className="each-link"> House </Nav.Link>
            <Nav.Link  href="/Apartment" className="each-link"> Apartment </Nav.Link>
            <Nav.Link href="/Condo" className="each-link"> Condo </Nav.Link>
            <Nav.Link href="#" className="each-link"> Storage </Nav.Link>

                      </Nav>
 
 
</Navbar>
</>
)
}

export default Jbnavbar;