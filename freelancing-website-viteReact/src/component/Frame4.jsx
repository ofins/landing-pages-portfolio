import './Frame4.css'

function Frame4() {
    return (
        <div className="frame4-container">
            <div className="frame4-title">
                <h2>Choose Different <span className="blue">Category</span></h2>
            </div>
            <div className="frame4-category">
                <div className="frame4-items" id="item1"><h4>Graphic & Design</h4></div>
                <div className="frame4-items" id="item2"><h4>Cartoon Animation</h4></div>
                <div className="frame4-items" id="item3"><h4>Illustration</h4></div>
                <div className="frame4-items" id="item4"><h4>Flyers & Vouchers</h4></div>
                <div className="frame4-items" id="item5"><h4>Logo Design</h4></div>
                <div className="frame4-items" id="item6"><h4>Social Graphics</h4></div>
                <div className="frame4-items" id="item7"><h4>Article Writing</h4></div>
                <div className="frame4-items" id="item8"><h4>Video Editing</h4></div>
            </div>
            <button>More Categories</button>
        </div>
    )
}

export default Frame4