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
      src="https://asset.cloudinary.com/dlnshpfdv/f3d0cc23cc8fd4066752cfd2ac80f81b"
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