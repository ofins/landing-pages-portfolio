import React from 'react'
import ReactDOM from 'react-dom/client'

import './Recommend.css'
import RecommendData from './RecommendData.js'

function Profile(props) {
    return (
        <div className="recommend-container">
            <img src={props.img} className="recommend-img" />
            <h3 className="recommend--header">{props.title}</h3>
            <p className="recommend--subtext">{props.subtext}</p>
        </div>
    )
}

export default function Recommend() {

    const testimonials = RecommendData.map(item => {
        return (
            <Profile 
                key={item.id}
                img={item.img}
                title={item.title}
                subtext={item.subtext}
            />
        )
    })

    //Carousel slider at mobile view
    
    const [person, setPerson] = React.useState(0)

    function ProfileMobile() {
        return(
            <Profile 
                key={RecommendData[person].id}
                img={RecommendData[person].img}
                title={RecommendData[person].title}
                subtext={RecommendData[person].subtext}
            />
        )
        
    }

    function add() {
        if(person >= 3) {
            setPerson(0)
        } else {
            setPerson(person + 1)
        }
        
    }

    function minus() {
        if(person <= 0) {
            setPerson(3)
        } else {
            setPerson(person - 1)
        }
        
    }

    return (
        <div className="recommend-container" id="recommend">
            <img src="./images/mobile/6/mobile_6.png" className="recommend--title" />
            <hr />
            {/* If overe 1280px, will display desktop setting */}
            <div className="recommend-box">
                {testimonials}
            </div>
            {/* If under 1280px, will display mobile setting */}
            <div className="recommendMobile-box">
                <i className="fa-solid fa-chevron-left" onClick={minus}></i>
                <ProfileMobile />
                <i className="fa-solid fa-chevron-right" onClick={add}></i>
            </div>
        </div>
    )
}

