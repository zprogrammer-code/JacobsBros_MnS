import React from "react";
import { Navbar, Container} from "react-bootstrap";


const Jbnavbar = () => {

return(
<>
<Navbar className="nav-brand">
<Container>
  <Navbar.Brand href="#home" className="logo">
    <img
      alt=""
      src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1702520440/Screenshot_2023-11-24_12.12.57_PM_eerbas.png"
      width="90"
      height="90"
      className="d-inline-block align-top"
    />{' '}
    <div className="title-center">
    JacobsBro's Moving & Storage
    </div>
  </Navbar.Brand>
  </Container>
 
</Navbar>
</>
)
}

export default Jbnavbar;