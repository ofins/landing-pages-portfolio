import './Calltoaction.css'

function Calltoaction() {
    return (
        <div className="calltoaction-box">
            <div className="text-box1">
                <h1>Are you looking for Freelancers?</h1>
                <p>Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice</p>
            </div>
            <button className="button1">Hire a freelancer</button>
            <input className="input1" placeholder="search freelance work" />
            <img src="./public/image/image4.png" id="search-btn" />
            <img src="./public/image/working-remotely.png" />
            <div className="circle">
            </div>
        </div>
    )
}

export default Calltoaction