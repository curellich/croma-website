import React, {useRef, useState} from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, keyframes} from "@mui/material";
import Typography from "@mui/material/Typography";
import "../animate.css"
import "../App.css"
import {useInView} from "react-intersection-observer";


const ServiceCard = (props) => {
    const {ref, inView, entry} = useInView({
        threshold: 0.2,
    })
    console.log(inView)

    return (
        <Card sx={{maxWidth: 345, minHeight: 330}} ref={ref} className={inView ? "animate__animated animate__pulse " : ""} key={props.key}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="194"
                    image={props.image}
                    alt="Paella dish">
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                        {props.serviceTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={"1rem"}>
                        {props.serviceDescription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ServiceCard;
