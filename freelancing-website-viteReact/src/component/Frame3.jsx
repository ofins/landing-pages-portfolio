import './Frame3.css'

function Frame3() {
    return (
        <div className="frame3-container">
            <div className="frame3-title">
                <div className="frame3-title-text">
                    <p>The latest freelance work!</p>
                    <h2>Recently Posted <span className="blue">Works</span></h2>
                </div>
                <div className="frame3-title-btns">
                    <div className="frame3-btn-left"></div>
                    <div className="frame3-btn-right"></div>
                </div>
            </div>
            <div className="frame3-catalog">
                <div className="frame3-items">
                    <img src="./public/image/material.png" />
                    <h3>Logo Design</h3>
                    <p>Need a professional logo with writing underneath for our jewellery company</p>
                    <div className="frame3-items-bottom">
                        <p>Highest Bid $500</p>
                        <p><a href="">Apply now</a></p>
                    </div>
                </div>
                <div className="frame3-items">
                    <img src="./public/image/canva.png" />
                    <h3>Graphic Design</h3>
                    <p>We need a graphic designer with UI/UX skills for our Furniture company</p>
                    <div className="frame3-items-bottom">
                        <p>Highest Bid $500</p>
                        <p><a href="">Apply now</a></p>
                    </div>
                </div>
                <div className="frame3-items">
                    <img src="./public/image/account.png" />
                    <h3>Need a SEO</h3>
                    <p>Need a SEO for our company who will let our company to a higher level</p>
                    <div className="frame3-items-bottom">
                        <p>Highest Bid $300</p>
                        <p><a href="">Apply now</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frame3