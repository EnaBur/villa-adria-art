import React from "react";

const Gallery = () => {

    return(
        <div className="galery-body" id="gallery">
            <div className="galery">
                <img alt="img1" src={require('../images/1.jpg')}/>
                <img alt="img1" src={require('../images/2.jpg')}/>
                <img alt="img1" src={require('../images/3.jpg')}/>
                <img alt="img1" src={require('../images/4.jpg')}/>
                <img alt="img1" src={require('../images/5.jpg')}/>
                <img alt="img1" src={require('../images/6.jpg')}/>
            </div>
        </div>
        
    );
};

export default Gallery;