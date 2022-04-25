import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroImage from '../assets/hero-image.jpg'
import {Paper} from "@mui/material";
import "../App.css"


const style = ({
    box: {
        height: "95vh",
        width: "100%",
        margin: "0",
    },
    paper: {
        display: "flex",
        width: "95vw",
        height: "50%",
        marginBottom: "4rem",
        alignItems: "center",
        justifyContent: "center",

    },
})

const About = () => {
    return (
        <Box className={"aboutSection"} style={style.box} id={"about"}>
            <div className={"opacity"}>
                <div className={"container"}>
                    <Typography className={"title"} variant={"h2"} paddingBottom={"4rem"} color={"#fff"}>
                        ¿Quiénes somos?
                    </Typography>
                    <Paper elevation={24} sx={style.paper}>
                        <Typography className={"description"} variant={"h2"} paddingBottom={"4rem"} color={"#000"}
                                    textAlign={"center"}>
                            ACA PONEMOS ZARAZA
                            Somos un equipo de trabajo estable, profesional y experimentado, coordinado para conseguir
                            la excelencia en el tratamiento odontológico. Consideramos una prioridad la atención
                            personalizada y el trato agradable y cercano a cada uno de nuestros pacientes.
                        </Typography>
                    </Paper>
                </div>
            </div>


        </Box>
    );
};

export default About;
