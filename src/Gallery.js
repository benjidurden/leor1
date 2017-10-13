import React, {Component} from 'react';


class Gallery extends Component {
    render(){
        return (
        <div>
            <div className="mainImg">
                <img className="main"
                src='https://res.cloudinary.com/benjidurden/image/upload/v1507842247/Photo_Oct_11_3_13_48_PM_yz8fgy.jpg' alt="boltMain" />
            </div>

            <div className="otherImgs">
                <img className="side"
                src="https://res.cloudinary.com/benjidurden/image/upload/v1507842254/Photo_Oct_11_3_28_20_PM_uwekbm.jpg" alt="boltshot1" />
                <img className="side"
                src="https://res.cloudinary.com/benjidurden/image/upload/v1507842254/Photo_Oct_11_3_28_20_PM_uwekbm.jpg" alt="boltshot2" />
                <img className="side"
                src='https://res.cloudinary.com/benjidurden/image/upload/v1507842257/Photo_Oct_11_4_01_55_PM_vrldiz.jpg' alt="boltshot3" />
            </div>
        </div>
        )
    }
}

export default Gallery;