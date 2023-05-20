import './Features.css'
import {Row, Col} from 'react-bootstrap'

function Features(props) {
    return(
        <div className="features--container" id="features">
            <h3 data-aos="zoom-out" className="features--title">Features We Provide</h3>
                <Row>
                    <Col md="6" className="p-5 ">
                        <div data-aos="fade-right" className="features--cardContainer d-lg-flex">
                            <div className="features--cardtext flex-column">
                                <h3>Emails</h3>
                                <p>Email is a great place to reach the people who already know your brand and product or service.</p>
                            </div>
                            <div className="features--eclipse">
                                <img src={`./images/features/${props.theme === 'light' ? '' : 'dark/'}mail.png`} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col md="6" className="p-5 ">
                        <div data-aos="fade-left" className="features--cardContainer d-lg-flex flex-row-reverse ">
                            <div className="features--cardtext flex-column">
                                <h3 className="text-end">Blog Posts</h3>
                                <p className="text-end">The great thing about using your blog posts to promote an offer is that you can tailor the entire piece to the end goal.</p>
                            </div>
                        <div className="features--eclipse">
                            <img src={`./images/features/${props.theme === 'light' ? '' : 'dark/'}sync.png `}alt="" />
                        </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" className="p-5 ">
                        <div data-aos="fade-right" className="features--cardContainer d-lg-flex">
                            <div className="features--cardtext flex-column">
                                <h3>Ads & Retargeting</h3>
                                <p>The sole purpose of an ad is to get people to take an action. Otherwise, why spend the money?</p>
                            </div>
                            <div className="features--eclipse">
                                <img src={`./images/features/${props.theme === 'light' ? '' : 'dark/'}ads_click.png`} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col md="6" className="p-5 ">
                        <div data-aos="fade-left" className="features--cardContainer d-lg-flex flex-row-reverse">
                            <div className="features--cardtext flex-column">
                                <h3 className="text-end">Social Media</h3>
                                <p className="text-end">Social media platforms make it easy to guide your followers to take action, like the swipe up option on Instagram stories</p>
                            </div>
                        <div className="features--eclipse">
                            <img src={`./images/features/${props.theme === 'light' ? '' : 'dark/'}security.png`} alt="" />
                        </div>
                        </div>
                    </Col>
                </Row>
        </div>
        
    )
}

export default Features