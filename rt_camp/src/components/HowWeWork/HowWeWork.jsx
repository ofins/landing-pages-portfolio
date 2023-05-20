import './HowWeWork.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'


const imgData = [
    {id:"1", title:"Attract", text:"The attract phase is where the customer first becomes aware of your brand.", imgUrl:"../images/hhw/1.png"},
    {id:"2", title:"Engage", text:"Your customer will be engaging with your content, reviewing blogs etc.", imgUrl:"../images/hhw/2.png"},
    {id:"3", title:"Convert", text:"Now, they see a sponsored ad and from there, it’s over to your lead nurturing sequences.", imgUrl:"../images/hhw/3.png"},
]

const cardEl = imgData.map((card, index) => (
    <div className="hww--card" key={index}>
        <div className="hww--circle">
            <h3>{card.id}</h3>
        </div>
        <img src={card.imgUrl} alt={`image of ${card.id}`} />
        <h3>{card.title}</h3>
        <p>{card.text}</p>
    </div>
))

function HowWeWork() {
    useEffect(() => {
        Aos.init({
            offset:400,
            duration:1000,
            easing: 'ease-in-sine',
            delay: 100,
        })
    }, [])

    return(
        <div data-aos="fade-right" className="hww--container my-5">
            <h3>How We Work?</h3>
            <div data-aos="flip-up" className="hww--cardContainer">
                {cardEl}
            </div>
        </div>
    )
}

export default HowWeWork