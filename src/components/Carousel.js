import React, {useEffect, useState} from 'react';
import "../App.css"
import {images} from "../helpers/CarouselData";
import Typography from "@mui/material/Typography";

const Carousel = () => {
    const [currImg, setCurrImg] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrImg((prevCurrImg) => (prevCurrImg + 1) % images.length);
        }, 4000);

        return () => clearInterval(timer)
    }, []);

    return (
        <div className={"carousel"}  >
            <div className={"carousel-inner"} style={{backgroundImage: `url(${images[currImg].img})`}}>
                <div className={"center"}>
                    <Typography className={"title"} variant={"h2"}>
                        {images[currImg].title}
                    </Typography>
                    <Typography className={"description"} variant={"h2"}>
                        {images[currImg].description}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
