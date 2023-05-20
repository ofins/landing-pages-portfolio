import data from './data'
import './Testimonials.css'
import { Row, Col} from 'react-bootstrap'
import { useState, useEffect } from 'react'

let first = 0;
let last = 3;


function Testimonials(props) {
    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    if(size.width < 960) {
        last = first + 1  
    } 

    useEffect(()=>{
        function handleResize() {
            setSize({
                height: window.innerHeight,
                width: window.innerWidth
            })
            
        }

        window.addEventListener('resize', handleResize)

        return () => {
        window.removeEventListener('resize', handleResize)
    }
            
    },[size])


    const [displayList, setDisplayList] = useState(data.slice(first, last))
    const [flip, setFlip] = useState(false)

    function handleRightArrow(){
        if(last === data.length) {
            return 
        } else {
            setDisplayList(data.slice(first + 1, last + 1))
            setFlip(true)
            first++
            last++
        }
    }
    
    function handleLeftArrow(){
        if(first === 0) {
            return 
        } else {
            setDisplayList(data.slice(first - 1, last - 1))
            setFlip(true)
            first--
            last--
        }
    }

    const profileEl = displayList.map((profile, index) => (
        <Col md={true} className="my-5 w-75 d-flex justify-content-center" key={index} data-aos="flip-right">
            <div className={`testimonials--profileContainer ${flip ? 'animateFlip' : ''}`} onAnimationEnd={() => {setFlip(false)}}>
                <div className="profileImage">
                    <img src={profile.profileImg} alt="" />
                </div>
                <div className="testimonials--textbox">
                    <p>{profile.text}</p>
                    <p>-{profile.name} | {profile.role}</p>
                    <img src={props.theme === 'light' ? profile.companyLogo : profile.companyLogoDark} alt="" />
                </div>
            </div>
        </Col>
    ))
    return(
    <div className="testimonials--container" id="testimonials">
        <Row className="testimonials--title">
            <h2 data-aos="fade-left">What Our Clients Says?</h2>
        </Row>
        <Row className="testimonials--profileBox justify-content-center">
            <Col className="col-1 d-flex align-items-center">
                <div data-aos="zoom-in" className={`testimonials--btn left-arrow`} onClick={handleLeftArrow}>
                    <img src={`../../../images/${props.theme === 'light' ? "" : "dark"}/arrow_left.png`} alt="" />
                </div>
            </Col>
            {profileEl}
            <Col className="col-1 d-flex align-items-center">
            <div data-aos="zoom-in" className="testimonials--btn right-arrow" onClick={handleRightArrow}>
                <img src={`../../../images/${props.theme === 'light' ? "" : "dark"}/arrow_right.png`} alt="" />
            </div>
            </Col>
        </Row>
    </div>
    )
}

export default Testimonials