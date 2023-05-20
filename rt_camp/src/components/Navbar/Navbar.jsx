import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import './Navbar.css'

function NavbarComponent(props) {

    return(
        <Navbar data-theme={props.theme} collapseOnSelect expand="lg" className="Navbar--container">
            <Container>
                <Navbar.Brand href="/">
                    <img src={`./images/${props.theme === 'light' ? "" : "dark/"}logo.png`} alt="logo" />
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className="NavLink--text mx-2" href="#ourwork">Our Work</Nav.Link>
                    <Nav.Link className="NavLink--text mx-2" href="#features">Features</Nav.Link>
                    <Nav.Link className="NavLink--text mx-2" href="#testimonials">Testimonials</Nav.Link>
                    <Nav.Link className="NavLink--text mx-2" href="#contactus">Contact</Nav.Link>
                    <NavDropdown className="NavLink--text mx-2" title="Customize" id="navbardropdown">
                        <NavDropdown.Item onClick={props.toggleTheme}>{props.theme === 'light' ? "Dark Mode" : "Light Mode"}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent

