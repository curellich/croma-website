import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../App.css"
import ContactCards from "../components/ContactCards";
import Formular from "../components/Formular";
import {Paper} from "@mui/material";


const Contact = () => {
    return (
        <Box className={"contactSection"} id={"contact"}>
            <Typography className={"contactTitle"}>Contáctanos</Typography>
            <div className={"contactContainer"}>
                <Paper className={"contactFormular"} elevation={24}>
                    <ContactCards/>
                    <Formular/>
                </Paper>
                <Paper className={"contactPosition"} elevation={24}>

                </Paper>
            </div>

        </Box>
    );
};

export default Contact;
