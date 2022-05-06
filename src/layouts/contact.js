import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css"
import ContactCards from "../components/ContactCards";
import Formular from "../components/Formular";
import {Paper} from "@mui/material";
import Map from "../components/Map";


const Contact = () => {
    return (
        <Box className={"contactSection"} id={"contact"}>
            <Typography className={"contactTitle"}>Contáctanos</Typography>
            <div className={"contactContainer"}>
                <Paper className={"contactFormular"} elevation={24}>
                    <ContactCards/>
                    <Typography variant={"h5"} textAlign={"center"} mt={"2rem"}>
                        Tu consulta no molesta
                    </Typography>
                    <Formular/>
                </Paper>
                <Paper className={"contactPosition"} elevation={24}>
                    <Typography variant={"h5"} m={"0 1rem 2rem 1rem"}>
                        ¿Dónde estamos?
                    </Typography>
                <Map/>
                </Paper>
            </div>

        </Box>
    );
};

export default Contact;
