import React from 'react'
import ReactDOM from 'react-dom/client'

import './Article.css'
import ArticleData from './ArticleData.js'

function Blog(props) {
    return (
        <div className="blog-container">
            <img src={props.img} className="blog-img" />
            <h3 className="blog--title">{props.title}</h3>
            <p className="blog--subtext">{props.subtext}</p>
        </div>
    )
}

export default function Article() {

    const articleList = ArticleData.map(item => {
        return (
            <Blog 
                key={item.id}
                img={item.img}
                title={item.title}
                subtext={item.subtext}
            />
        )
    })

    //Carousel slider at mobile view
    
    const [square, setSquare] = React.useState(0)

    function BlogPostMobile() {
        return(
            <Blog 
                key={ArticleData[square].id}
                img={ArticleData[square].img}
                title={ArticleData[square].title}
                subtext={ArticleData[square].subtext}
            />
        )
        
    }

    function add() {
        if(square >= 3) {
            setSquare(0)
        } else {
            setSquare(square + 1)
        }
        
    }

    function minus() {
        if(square <= 0) {
            setSquare(3)
        } else {
            setSquare(square - 1)
        }
        
    }

    return (
        <div className="article-container">
            <img src="./images/mobile/7/mobile_7.png" className="article--title" />
            <hr />
            <div className="article-box">
                {articleList}
            </div>
            <div className="articleMobile-box">
                <i className="fa-solid fa-chevron-left" onClick={minus}></i>
                <BlogPostMobile />
                <i className="fa-solid fa-chevron-right" onClick={add}></i>
            </div>
        </div>
    )
}