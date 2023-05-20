import './LandingPage.css'
import {Button, Row, Col, Modal} from 'react-bootstrap'
import {useState} from 'react'

const iconData = [
    {company:"google", imgUrl:"./images/landingPage/google.png"},
    {company:"netflix", imgUrl:"./images/landingPage/netflix.png"},
    {company:"tesla", imgUrl:"./images/landingPage/tesla.png"},
    {company:"amazon", imgUrl:"./images/landingPage/amazon.png"},
    {company:"disney", imgUrl:"./images/landingPage/disney.png"},
    {company:"paypal", imgUrl:"./images/landingPage/paypal.png"},
]

const iconDataDark = [
    {company:"google", imgUrl:"./images/landingPage/dark/google.png"},
    {company:"netflix", imgUrl:"./images/landingPage/dark/netflix.png"},
    {company:"tesla", imgUrl:"./images/landingPage/dark/tesla.png"},
    {company:"amazon", imgUrl:"./images/landingPage/dark/amazon.png"},
    {company:"disney", imgUrl:"./images/landingPage/dark/disney.png"},
    {company:"paypal", imgUrl:"./images/landingPage/dark/paypal.png"},
]

function LandingPage(props) {

    const iconEl = (props.theme === 'light' ? iconData : iconDataDark).map((icon, index) =>(
        <div className="iconbox--icon" key={index}>
            <img src={icon.imgUrl} alt={`company logo of ${icon.company}`} />
        </div>
    ))

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return(
        <div data-theme={props.theme} className="landingPage--container">
            <div className="landingPage--textbox">
                <h3>Good Work. Good People.</h3>
                <p>We will help you to grow better by fetching most of the leads through Mails, Blogs, Social Media and various other platforms</p>
            </div>
            <div className="landingPage--btns my-5">
                <Row className="justify-content-md-center">
                    <Col xs></Col>
                    <Col md="6" className="d-flex justify-content-center ">
                        <Button variant="dark mx-2" id="getstartedbtn" onClick={handleShow}> Get Started</Button>
                        <Button variant="outline-dark mx-2" id="contactus-btn" href="#contactus" style={{border:`${props.theme === 'light' ? "2px solid black" : "2px solid white" }`}}> Contact Us</Button>
                    </Col>
                    <Col xs></Col>
                </Row>
            </div>
            <div data-aos="zoom-in" data-aos-offset="0" className="landingPage--iconbox">
                <p className="my-5">We are 1st  WordPress Vip Partner from Asia serving top companies in the world</p>
                <div className="iconbox--icons">
                    {iconEl}
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>Welcome aboard!</Modal.Header>
                <Modal.Body>
                    you will now be redirected to another site...
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Next</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LandingPage