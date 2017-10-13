import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-materialize';


class Home extends Component {
    render(){
        return (
            <div>
                {/* Footer */}
                <Link to = "/">
                <img className="sb-logo hvr-pulse" src="http://res.cloudinary.com/benjidurden/image/upload/v1507828599/-bolt_logo_irovx2.png" alt="bolt-logo" />
                </Link>
                <div className="menuContainer">
                    <Row>
                    <Col className="mainBar hvr-grow" l={3}><a className="removeLink"
                    href="http://blog.stone-brook.com">Blog</a></Col>
                    <Col className="mainBar hvr-grow" l={3}>
                    <Link className="removeLink" to = "/gallery">
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
                <div className="homeMain">
                <iframe className="brokeVideo"
                src="https://www.youtube-nocookie.com/embed/ygDPeoYpyLc?rel=0" frameBorder="0" allowFullScreen></iframe>
                </div>
                    <div className="services">
                    <div className="itunes">
                    <a href="https://itunes.apple.com/us/album/a-milli/id287818308?i=287818317">
                     <img className="itunes" src="https://res.cloudinary.com/benjidurden/image/upload/v1507851593/itunes_twjo6t.svg" alt="itunes" /></a>
                    </div>
                    <div className="soundcloud">
                    <a href="https://soundcloud.com/swagistin/lil-wayne-a-milli">
                    <img className="soundcloud"
                    src="https://res.cloudinary.com/benjidurden/image/upload/v1507851610/soundcloud100_iqss43.svg" alt="soundcloud" /></a>
                    </div>
                    <div className="spotify">
                    <a href="https://open.spotify.com/track/6ScJMrlpiLfZUGtWp4QIVt">
                    <img className="spotify"
                    src="https://res.cloudinary.com/benjidurden/image/upload/v1507851602/spotify100_oxfrc9.svg" alt="spotify" /></a>
                    </div>
                    </div>
                <footer className="copyright">
                © 2017 StoneBrook
                </footer>
            </div>
        )
    }
}

export default Home;