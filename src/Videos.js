import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-materialize';

class Videos extends Component {
    render(){
        return (
            <div>
            <Link to = "/">
                <img className="sb-logo hvr-pulse" src="http://res.cloudinary.com/benjidurden/image/upload/v1507828599/-bolt_logo_irovx2.png" alt="bolt-logo" />
                </Link>
                <div className="menuContainer">
                    <Row>
                    <Col className="mainBar hvr-grow" l={3}><a className="removeLink"
                    href="http://blog.stone-brook.com">Blog</a></Col>
                    <Col className="mainBar hvr-grow" l={3}>
                    <Link className="removeLink" id="killSecondColor" to = "/gallery">
                    Gallery
                    </Link>
                    </Col>
                    <Col className="mainBar hvr-grow" l={3}>
                    <Link className="removeLink" id="killColor" to ="/videos">
                    Videos
                    </Link>
                    </Col>
                    <Col className="mainBar hvr-grow" l={3}><a className="removeLink"
                    href="http://store.stone-brook.com">Store</a></Col>
                    </Row>
                </div>
                <iframe className="brokeVideo" id="videoSecBroke"
                src="https://www.youtube-nocookie.com/embed/ygDPeoYpyLc?rel=0" frameBorder="0" allowFullScreen title="brokeVideo"></iframe>
            </div>
        )
    }
}

export default Videos;