import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';

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

    const [isEmpty, setIsEmpty] = React.useState("")

    function isBoxEmpty(event) {
        setIsEmpty(event.target.value)
        event.preventDefault()
    }
    console.log(isEmpty)

    // submit button if successful
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true);event.preventDefault()};
    
    //submit button if unsuccessful
    const [showError, setShowError] = React.useState(false);
    const handleCloseError = () => setShowError(false);
    const handleShowError = () => {setShowError(true); event.preventDefault()};


    // const refreshPage = ()=>{
    //     window.location.reload();
    //  }

    return (
        <div className="footer-container" id="footer">
            <form className="footer-form">
                <h3 className="form--title">報名資訊</h3>
                <p className="form--subtext">如有任何設計方面的需求或想法可透過以下聯絡方式或連寫表單，將會有專人與您致電聯繫，我們將很高興為您服務。</p>
                <br />
                <p>姓名*</p>
                <input type="text" placeholder="輸入您的名稱" onChange={(e)=>{handleClick(e); isBoxEmpty(e)}}
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
                <input type="submit" onClick={isEmpty ? handleShow : handleShowError} />
            </form>
            <img src="./images/mobile/8/mobile_8.png" className="footer--img" />
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
            {/* MODAL - Submit Successful */}
            <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>提交成功</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    感謝您的報名!
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        好
                    </Button>
                    </Modal.Footer>
            </Modal>
            {/* MODAL - Submit Unsuccessful */}
            <Modal
                    show={showError}
                    onHide={handleCloseError}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>訊息有錯誤</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    請輸入正確資料
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseError}>
                        好
                    </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}