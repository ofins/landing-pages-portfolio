import React from 'react'
import ReactDOM from 'react-dom/client'

import './ClassInfo.css'
import ClassInfoData from './ClassInfoData.js'

function Class(props) {
    return (
        <div className="class-container">
            <img src={props.img} className="class-img" />
            <h3 className="class--title">{props.title}</h3>
            <p className="class--subtext">{props.subtext}</p>
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