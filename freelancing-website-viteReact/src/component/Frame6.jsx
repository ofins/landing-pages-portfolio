import './Frame6.css'

function Frame6() {
    return (
        <div className="frame6-container">
            <div className="frame6-title">
                <h2>Newsletter Subscription</h2>
                <p>Subscribe to our newsletter to get new freelance work and projects </p>
            </div>
            <form className="frame6-submit">
                <input type="text" placeholder="Enter your email address" />
                <button>Subscribe</button>
            </form>
        </div>
    )
}

export default Frame6