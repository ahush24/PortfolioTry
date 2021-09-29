import React from "react";
import { Link } from "react-scroll";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

const Navibar = () => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container className="justify-content-end">
        <Navbar.Brand href="#home">KRITI.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default function HideAppBar(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <HideOnScroll {...props}>
//         <AppBar>
//           <Toolbar>
//             <Navbar bg="light" expand="lg">
//               //{" "}
//               <Container className="justify-content-end">
//                 // <Navbar.Brand href="#home">KRITI.</Navbar.Brand>
//                 // <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 //{" "}
//                 <Navbar.Collapse id="basic-navbar-nav">
//                   //{" "}
//                   <Nav className="me-auto">
//                     //{" "}
//                     <Nav.Link>
//                       //{" "}
//                       <Link to="about" spy={true} smooth={true}>
//                         // About //{" "}
//                       </Link>
//                       //{" "}
//                     </Nav.Link>
//                     //{" "}
//                     <Nav.Link>
//                       //{" "}
//                       <Link to="projects" spy={true} smooth={true}>
//                         // Projects //{" "}
//                       </Link>
//                       //{" "}
//                     </Nav.Link>
//                     //{" "}
//                     <Nav.Link>
//                       //{" "}
//                       <Link to="experience" spy={true} smooth={true}>
//                         // Experience //{" "}
//                       </Link>
//                       //{" "}
//                     </Nav.Link>
//                     //{" "}
//                     <Nav.Link>
//                       //{" "}
//                       <Link to="skills" spy={true} smooth={true}>
//                         // Skills //{" "}
//                       </Link>
//                       //{" "}
//                     </Nav.Link>
//                     //{" "}
//                     <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                       //{" "}
//                       <NavDropdown.Item href="#action/3.1">
//                         Action
//                       </NavDropdown.Item>
//                       //{" "}
//                       <NavDropdown.Item href="#action/3.2">
//                         // Another action //{" "}
//                       </NavDropdown.Item>
//                       //{" "}
//                       <NavDropdown.Item href="#action/3.3">
//                         Something
//                       </NavDropdown.Item>
//                       // <NavDropdown.Divider />
//                       //{" "}
//                       <NavDropdown.Item href="#action/3.4">
//                         // Separated link //{" "}
//                       </NavDropdown.Item>
//                       //{" "}
//                     </NavDropdown>
//                     //{" "}
//                   </Nav>
//                   //{" "}
//                 </Navbar.Collapse>
//                 //{" "}
//               </Container>
//               //{" "}
//             </Navbar>
//           </Toolbar>
//         </AppBar>
//       </HideOnScroll>
//       <Toolbar />
//       <Container>
//         <Box sx={{ my: 2 }}></Box>
//       </Container>
//     </React.Fragment>
//   );
// }
