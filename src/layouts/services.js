import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ServiceCard from "../components/ServiceCard";
import blanquemiento from "../assets/balqueamientoPhoto.jpeg"
import implantes from "../assets/implantePhoto.jpg"
import ortodoncia from "../assets/ortodonciaPhoto.jpg"
import {useInView} from "react-intersection-observer";
import 'animate.css';


const services = [
    {
        image: ortodoncia,
        serviceTitle: "Ortodoncia",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda cumque " +
            "eaque eum in vitae voluptate. Dolore dolorum ea facilis fugit inventore maiores nobis numquam odio " +
            "pariatur voluptatibus? Doloremque, id."
    },
    {
        image: blanquemiento,
        serviceTitle: "Blanqueamientos ",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda cumque " +
            "eaque eum in vitae voluptate. Dolore dolorum ea facilis fugit inventore maiores nobis numquam odio " +
            "pariatur voluptatibus? Doloremque, id."
    },
    {
        image: implantes,
        serviceTitle: "Implantes",
        serviceDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, assumenda cumque " +
            "eaque eum in vitae voluptate. Dolore dolorum ea facilis fugit inventore maiores nobis numquam odio " +
            "pariatur voluptatibus? Doloremque, id."
    },

];


const Services = () => {
    const {ref, inView, entry} = useInView({
        threshold: 0.3,
    })
    console.log(inView)

    return (
        <Box className={"servicesBox"} id="services">
            <Typography className={"serviceTitle"} variant={"h3"}>
                Nuestros servicios
            </Typography>
            <div className={"serviceCardContainer"}  >
                {services.map(service =>
                    <ServiceCard
                        key={service.serviceTitle + "serviceCard"}
                        image={service.image}
                        serviceTitle={service.serviceTitle}
                        serviceDescription={service.serviceDescription}
                    />
                )}
            </div>
        </Box>
    );
};

export default Services;
