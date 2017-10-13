import React, {Component} from 'react';


class Gallery extends Component {
    render(){
        return (
        <div>
            <div className="mainImg">
                <img className="main"
                src="https://res.cloudinary.com/benjidurden/image/upload/v1507930991/Photo_Oct_05_12_12_06_PM_rvs0oo.jpg" alt="galleryMain" />
            </div>
            <div className="otherImgs">
                <img className="side"
                src="https://res.cloudinary.com/benjidurden/image/upload/v1507842254/Photo_Oct_11_3_28_20_PM_uwekbm.jpg" alt="boltshot1" />
                <img className="side"
                src="https://res.cloudinary.com/benjidurden/image/upload/v1507930997/Photo_Oct_11_3_25_14_PM_ccacsi.jpg" alt="boltshot2" />
                <img className="side"
                src='https://res.cloudinary.com/benjidurden/image/upload/v1507842257/Photo_Oct_11_4_01_55_PM_vrldiz.jpg' alt="boltshot4" />
                <img className="side"
                src="https://res.cloudinary.com/benjidurden/image/upload/v1507930991/Photo_Oct_11_3_28_58_PM_qd9ioe.jpg" alt="boltshot5" />
                <img className="side"
                src='https://res.cloudinary.com/benjidurden/image/upload/v1507842247/Photo_Oct_11_3_13_48_PM_yz8fgy.jpg' alt="boltshot6" />
            </div>
        </div>
        )
    }
}

export default Gallery;