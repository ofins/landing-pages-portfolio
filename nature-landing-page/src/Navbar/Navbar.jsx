import React from 'react'
import "./Navbar.css"

// TOTAL TIME: 2.5HR

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <img src="./images/desktop/1/desktop1_logo.png" className="navbar--logo" />
                <i class="fa-solid fa-bars"></i>
                <ul className="desktop-navlist">
                    <li><a href="">品牌故事</a></li>
                    <li><a href="">學習療育</a></li>
                    <li><a href="">學員心得</a></li>
                    <li><a href="">療育文章</a></li>
                    <li><a href="">報名資訊</a></li>
                </ul>
            </div>
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
