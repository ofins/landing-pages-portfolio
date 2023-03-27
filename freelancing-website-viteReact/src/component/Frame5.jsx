import './Frame5.css'

function Frame5() {
    return (
        <div className="frame5-container">
            <div className="frame5-title">
                <p>Logos, websites, book covers & more!</p>
                <h2>Checkout The Best <span className="blue">Portfolios</span> Here</h2>
            </div>
            <div className="frame5-catalog">
                <div className="frame5-items">
                    <img src="./public/image/frame5-1.png" />
                    <div className="frame5-item-bot">
                        <div className="frame5-item-bot-text">
                            <h5>Bunny.design</h5>
                            <p>UI/UX Designer</p>
                        </div>
                        <img src="./public/image/frame5-arrow.png" />
                    </div>
                </div>
                <div className="frame5-items">
                    <img src="./public/image/graphic-design.jpg" />
                    <div className="frame5-item-bot">
                        <div className="frame5-item-bot-text">
                            <h5>Jason Smith</h5>
                            <p>Graphic Designer</p>
                        </div>
                        <img src="./public/image/frame5-arrow.png" />
                    </div>
                </div>
                <div className="frame5-items">
                    <img src="./public/image/social-graphic.jpg" />
                    <div className="frame5-item-bot">
                        <div className="frame5-item-bot-text">
                            <h5>Bhaskar Tiwari</h5>
                            <p>Graphic Designer</p>
                        </div>
                        <img src="./public/image/frame5-arrow.png" />
                    </div>
                </div>
            </div>
            <img src="./public/image/frame5-2.png" />
        </div>
    )
}

export default Frame5