import React, {Component} from 'react';

class Videos extends Component {
    render(){
        return (
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UROLAsyc_KU?rel=0" frameborder="0" allowfullscreen title="mainVideo"></iframe>
            <a href="https://itunes.apple.com/us/album/a-milli/id287818308?i=287818317">
            <img className="itunes" src="https://res.cloudinary.com/benjidurden/image/upload/v1507851593/itunes_twjo6t.svg" alt="itunes" /></a>
            <a href="https://soundcloud.com/swagistin/lil-wayne-a-milli">
            <img className="soundcloud"
            src="https://res.cloudinary.com/benjidurden/image/upload/v1507851610/soundcloud100_iqss43.svg" alt="soundcloud" /></a>
            <a href="https://open.spotify.com/track/6ScJMrlpiLfZUGtWp4QIVt">
            <img className="spotify"
            src="https://res.cloudinary.com/benjidurden/image/upload/v1507851602/spotify100_oxfrc9.svg" alt="spotify" /></a>
            </div>
        )
    }
}

export default Videos;