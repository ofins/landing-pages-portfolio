import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-catalog">
                <div className="footer-logo">
                    <img src="./public/image/logo.png" />
                    <p>Powerful Freelance Marketplace System with ability to change the Users (Freelancers & Clients)</p>
                </div>
                <div className="footer-items">
                    <h2>For Clients</h2>
                    <ul>
                        <li><a href="">Find Freelancers</a></li>
                        <li><a href="">Post Projects</a></li>
                        <li><a href="">Refund Policy</a></li>
                        <li><a href="">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-items">
                    <h2>For Freelancers</h2>
                    <ul>
                        <li><a href="">Find Work</a></li>
                        <li><a href="">Create Account</a></li>
                    </ul>
                </div>
                <div className="footer-items call-us">
                    <h2>Call Us</h2>
                    <ul>
                        <li>Taiwan</li>
                        <li>+1561215215352</li>
                        <li>spacelance@example.com</li>
                    </ul>
                </div>
            </div>
            <p className="footer-text">2022 Spacelance. All right reserved.</p>
        </div>
    )
}

export default Footer