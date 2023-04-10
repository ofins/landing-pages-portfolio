import React from 'react'
import "./Navbar.css"

// TOTAL TIME: 2.5HR

//navbar toggle

export default function Navbar() {
    const [isNavBarExpanded, setIsNavBarExpanded] = React.useState(false)

    const style = {
        transform: isNavBarExpanded ? "rotate(-90DEG)" : '',
        transition: 'transform 150ms ease'
    }

    const slideDown = {
        animation: isNavBarExpanded ? "slideDown 1s" : "",
        transition: 'transform 150ms ease'
    }

    function closeNav() {
        setIsNavBarExpanded(false)
    }

    function Navbartoggle() {
        
        return(
        <div className={isNavBarExpanded ? "navbaropen" : "navbaropen hide"} style={slideDown}>
            <i class="fa-solid fa-xmark navlist-btn" onClick={() => {
                setIsNavBarExpanded(!isNavBarExpanded)
            }} ></i>
            <ul className="mobile-navlist">
                <li><a href="#aboutme" onClick={closeNav}><i class="fa-regular fa-user"></i>&emsp;品牌故事</a></li>
                <li><a href="#theta" onClick={closeNav}><i class="fa-solid fa-chalkboard"></i>&emsp;學習療育</a></li>
                <li><a href="#recommend" onClick={closeNav}><i class="fa-regular fa-heart"></i>&emsp;學員心得</a></li>
                <li><a href="#article" onClick={closeNav}><i class="fa-regular fa-pen-to-square"></i>&emsp;療癒文章</a></li>
                <li><a href="#footer" onClick={closeNav}><i class="fa-regular fa-paste"></i>&emsp;報名資訊</a></li>
            </ul>
        </div>
        )
    }

    return (
        <div className="navbar-container">
            <div className="navbar">
                <img src="./images/desktop/1/desktop1_logo.png" className="navbar--logo" />
                <i class="fa-solid fa-bars-staggered" 
                onClick={() => {
                    setIsNavBarExpanded(!isNavBarExpanded)
                }} style={style}>
                </i>
                <ul className="desktop-navlist">
                    <li><a href="#aboutme">品牌故事</a></li>
                    <li><a href="#theta">學習療育</a></li>
                    <li><a href="#recommend">學員心得</a></li>
                    <li><a href="#article">療癒文章</a></li>
                    <li><a href="#footer">報名資訊</a></li>
                </ul>
            </div>
            <Navbartoggle />
            <div className="front-page-container">
                <img src="./images/mobile/1/mobile_1bg.png" className="fp--bg" />
                <img src="./images/mobile/1/mobile_1_text.png" className="fp--title" />
                <img src="./images/mobile/1/mobile_1_portrait.png" className="fp--image" />
                <img src="./images/mobile/1/mobile_1_text2.png" className="fp--text1" />
            </div>
            <div className="front-page-container-ipad">
                <img src="./images/ipad/1/ipad_1_bg.png" className="fp--bg" />
                <img src="./images/ipad/1/ipad_1_text.png" className="fp--title" />
                <img src="./images/ipad/1/ipad_1_portrait.png" className="fp--image" />
                <img src="./images/ipad/1/ipad_1_text2.png" className="fp--text1" />
            </div>
            <div className="front-page-container-desktop">
                <img src="./images/desktop/1/desktop1_bg.png" className="fp--bg" />
                <img src="./images/desktop/1/desktop1_text.png" className="fp--title" />
                <img src="./images/desktop/1/desktop1_portrait.png" className="fp--image" />
                <img src="./images/desktop/1/desktop1_text2.png" className="fp--text1" />
            </div>
        </div>
    )
}
