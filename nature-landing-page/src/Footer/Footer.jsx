import React from 'react'
import ReactDOM from 'react-dom/client'

import "./Footer.css"

export default function Footer() {

    const [formData, setFormData] = React.useState(
        {
            name:"",
            email:"",
            comments:""
        }
    )

    console.log(formData)

    function handleClick(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        })
    }

    function submitClick() {
        alert("報名成功!")
        refreshPage()
    }

    const refreshPage = ()=>{
        window.location.reload();
     }

    return (
        <div className="footer-container">
            <img src="./images/mobile/8/mobile_8.png" className="footer--img" />
            <form className="footer-form">
                <h3 className="form--title">報名資訊</h3>
                <p className="form--subtext">如有任何設計方面的需求或想法可透過以下聯絡方式或連寫表單，將會有專人與您致電聯繫，我們將很高興為您服務。</p>
                <br />
                <p>姓名*</p>
                <input type="text" placeholder="輸入您的名稱" onChange={handleClick}
                name="name"
                value={formData.name}/>
                <p>信箱*</p>
                <input type="email" placeholder="輸入您的信箱" onChange={handleClick}
                name="email"
                value={formData.email}/>
                <p>訊息*</p>
                <textarea placeholder="請在這裡輸入您的訊息......" onChange={handleClick}
                name="comments"
                value={formData.comments}/>
                <input type="submit" class="footer--submitbtn" onClick={submitClick} />
            </form>
            <div className="footer-social">
                <div className="footerdesktop-box">
                    <ul>
                        <li>聯絡我們</li>
                        <li>【任何課程報名相關問題】</li>
                        <li>官方Line ID:@ThetaHealing</li>
                        <li>E-mail:ThetaHealing@gmail.com</li>
                    </ul>
                    <div className="social--icons">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
                <div className="footer--notes">
                    <p>Copyright © 2022 Co. oThetaHealing  All rights reserved</p>
                </div>
            </div>
        </div>
    )
}