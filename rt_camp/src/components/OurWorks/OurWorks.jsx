import './OurWorks.css'
import { Row, Col, Card, Button, Modal} from 'react-bootstrap'
import { useState } from 'react'

function OurWorks() {

    const [show, setShow] = useState({status:false, type: ""})

    const handleClose = () => setShow({status:false, type: ""})
    const handleShow = (element) => setShow({status:true, type: `Modal-${element}`})

    return(
    <div className="ourWorks--container my-5" id="ourwork">
        <Row>
            <h2 data-aos="slide-right" className="text-center my-5">Our Works</h2>
        </Row>
        <Row >
            <Col lg={true} className="my-3">
                <Card className="ourWorks--card" style={{width:"90%", marginInline:"auto", borderRadius:"15px"}} data-aos="zoom-in">
                    <Card.Img variant="top" src="../../../public/images/ourworks/img.png"></Card.Img>
                    <Card.Body>
                        <Card.Title className="ourWorks--cardTitle">Building Embedded Web Stories for WordPress</Card.Title>
                        <Card.Text className="ourWorks--cardText">rtCamp collaborated with Google to make the snackable Web Stories format even easier to consume with flexible WordPress blocks.</Card.Text>
                        <div className="text-end">
                        <Button variant="light" onClick={() => {handleShow(1)}}>Read more</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={true} className="my-3" >
                <Card className="ourWorks--card" style={{width:"90%", marginInline:"auto", borderRadius:"15px"}} data-aos="zoom-in">
                        <Card.Img variant="top" src="../../../public/images/ourworks/img-1.png"></Card.Img>
                        <Card.Body>
                            <Card.Title className="ourWorks--cardTitle">Migrating DealerTrack from AEM to WordPress</Card.Title>
                            <Card.Text className="ourWorks--cardText">rtCamp replat formed DealerTrack USA from Adobe Experience Manager to WordPress while reducing go-live timeframes by over 50%.</Card.Text>
                            <div className="text-end">
                            <Button variant="light" onClick={() => {handleShow(2)}}>Read more</Button>
                            </div>
                        </Card.Body>
                    </Card>
            </Col>
        </Row>
        <Row className="justify-content-center my-5">
            <Button variant="dark" className="col-5 col-lg-2" id="our-works-viewmore-btn" size="lg" data-aos="zoom-in">View More</Button>
        </Row>
        <Modal show={show.status} onHide={handleClose}>
            {show.type === "Modal-1" 
            ?
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Building Embedded Web Stories for WordPress</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img class="container my-5" src="../../../public/images/ourworks/img.png" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos omnis ad accusantium repellendus nam nobis expedita architecto rem ducimus eos, at odio veritatis consectetur sapiente quisquam quo nulla, fugiat, necessitatibus aut eveniet nesciunt deleniti. Est, quasi quas eligendi beatae incidunt tenetur nulla sit, iste tempora dolor possimus, at sunt et.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </>
            : 
            <>
                <Modal.Header closeButton>
                    <Modal.Title>Migrating DealerTrack from AEM to WordPress</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img class="container my-5" src="../../../public/images/ourworks/img-1.png" alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos omnis ad accusantium repellendus nam nobis expedita architecto rem ducimus eos, at odio veritatis consectetur sapiente quisquam quo nulla, fugiat, necessitatibus aut eveniet nesciunt deleniti. Est, quasi quas eligendi beatae incidunt tenetur nulla sit, iste tempora dolor possimus, at sunt et.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </>
        }
        </Modal>
        
    </div>
    )
}

export default OurWorks