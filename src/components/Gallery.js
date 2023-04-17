import React, { useState } from "react";
import data from '../data.js';

const Gallery = () => {

    const [image, setImage] = useState(data());

    return(
        <div className="galery-body" id="gallery">
            <div className="galery">
            {image.map((i) => (
            <img src={i.image} alt="house"
                image = {image}
                setImage = {setImage}
                i = {i}
            >
            </img>
            ))}
            </div>
        </div>
        
    );
};

export default Gallery;