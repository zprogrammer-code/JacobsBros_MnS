import React from "react";
import { Navbar, Container} from "react-bootstrap";


const Jbnavbar = () => {

return(
<>
<Navbar >
<Container className="navbar">
  <Navbar.Brand href="#home" className="logo">
    <img
      alt=""
      src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1703784466/Jacobs_Brothers_Moving_asnd_storage_3_dvfifr.png"
      width="180"
      height="180"
      className="brand"
    />{' '}
    <div className="title-center">
    </div>
  </Navbar.Brand>
  </Container>
 
</Navbar>
</>
)
}

export default Jbnavbar;