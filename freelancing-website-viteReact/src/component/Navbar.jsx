import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <img src="./public/image/logo.png" />
            <div className="navbar--menu">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Find Work</a></li>
                    <li><a href="">Find Freelancers</a></li>
                    <li><a href="">Log in</a></li>
                    <li><a href="">Sign Up</a></li>
                </ul>
                <button>Post a project</button>
            </div>
            
        </div>
        
    )
}

export default Navbar