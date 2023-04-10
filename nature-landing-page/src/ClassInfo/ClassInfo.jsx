import React from 'react'
import ReactDOM from 'react-dom/client'

import './ClassInfo.css'
import ClassInfoData from './ClassInfoData.js'

function Class(props) {

    const [hover, setHover] = React.useState(false)

    function hovering() {
        setHover(prevState => !prevState)
    }

    const style = {
        color: hover? "#b6917a" : "black"
    }
    return (
        <div className="class-container" onMouseEnter={hovering} onMouseLeave={hovering}>
            <div className="image-container"> 
            <img src={props.img} className="class-img" />
            </div>
            <h3 className="class--title" style={style}>{props.title}</h3>
            <p className="class--subtext" style={style}>{props.subtext}</p>
        </div>
    )
}

export default function ClassInfo() {

    const classList = ClassInfoData.map(item => {
        return (
            <Class 
                key={item.id}
                img={item.img}
                title={item.title}
                subtext={item.subtext}
            />
        )
    })

    return (
        <div className="classinfo-container">
            <img src="./images/mobile/5/mobile_5.png" className="classinfo--title" />
            <hr />
            <div className="class-box">
                {classList}
            </div>
        </div>
    )
}