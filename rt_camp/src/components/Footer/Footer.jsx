import './Footer.css'
import {Row, Col, InputGroup, Form, Button} from 'react-bootstrap'

function Footer(props) {
    return(
        <div className="footer--container" id="footer">
            <Row>
                <Col sm={true} className="text-center text-sm-start">
                    <div className="footer--subContainer">
                        <h3>About</h3>
                        <p>providing the best lead generation solutions in accordance with your needs</p>
                        <img className="my-4" src={`./images/${props.theme === 'light' ? "" : "dark/"}vip-logo.png`} alt="vip logo" />
                    </div>
                </Col>
                <Col sm={true} className="text-center">
                    <div className="footer--subContainer">
                        <Row>
                            <Col>
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="#ourwork">Our Work</a></li>
                                    <li><a href="#features">Features</a></li>
                                    <li><a href="#aboutus">About US</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </Col>
                            <Col>
                                <h3>Resources</h3>
                                    <ul>
                                        <li><a href="#ourwork">Tutorials</a></li>
                                        <li><a href="#features">Presskit</a></li>
                                        <li><a href="#aboutus">rtLearn</a></li>
                                        <li><a href="#contact">rtMedia</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col sm={true} className="text-center">
                    <div className="footer--subContainer">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter and get a few email updates every month.</p>
                        <InputGroup className="footer--emailInput my-4">
                            <Form.Control
                                placeholder="Your email"
                            />
                            <Button variant="dark" id="footerEmailBtn">
                                <img src="./images/send.png" alt="sendbtn" />
                            </Button>
                        </InputGroup>
                        <div className="footer--socialIcons">
                            <img src={`./images/${props.theme === 'light' ? '' : `dark/`}fb.png`} alt="facebook" />
                            <img src={`./images/${props.theme === 'light' ? "" : "dark/"}github.png`} alt="github" />
                            <img src={`./images/${props.theme === 'light' ? "" : "dark/"}linkedin.png`} alt="linkedin" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="footer--note">© rtCamp Inc., since 2009. All rights reserved.</p>
                </Col>
                <Col>
                    <p className="footer--note text-end">Terms of service | Privacy Policy</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer