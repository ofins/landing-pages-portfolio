import './ContactUs.css'
import {Row, Col, Button, Form, InputGroup} from 'react-bootstrap'

function ContactUs() {
    return(
        <div className="contactUs--container" id="contactus">
            <div className="contactUs--header">
                <h2 data-aos="fade-right" className="text-center">Contact Us</h2>
            </div>
            <div className="contactUs--subContainer">
                <Row>
                    <Col md={true} className="p-5 d-flex justify-content-center">
                        <div data-aos="fade-right" className="contactUs--box">
                            <h3>Business Inquiry</h3>
                            <p>We are known for our expertise in providing end-to-end WordPress solutions for global enterprises from different industries.</p>
                            <Button variant="dark" size="lg" id="contactus-get-in-touch-btn">Get In Touch</Button>
                        </div>
                    </Col>
                    <Col md={true} className="p-5 d-flex justify-content-center">
                        <div data-aos="fade-left" className="contactUs--box">
                            <h3>Have a Question?</h3>
                            <div className="inputboxA">
                                <Form.Group>
                                    <Form.Control className="contactUs--emailInput my-3" type="email" placeholder='email' />
                                </Form.Group>
                                <InputGroup>
                                    <Form.Control as="textarea" aria-label="Query" placeholder="Query" />
                                </InputGroup>
                            </div>
                            <Button className="contactUs--submitbtn" variant="outline-dark" size="lg" type="submit">Submit</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ContactUs