import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroImage from "../assets/Dentist1.jpg";
import {Paper} from "@mui/material";

const style = ({
    box: {
        backgroundColor: "skyblue",
        height: "95vh",
        width: "100%",
    }

})

const Appointment = () => {
    return (
        <Box className={"appointmentBox"} style={style.box} id={"appointment"}>
            <Typography variant={"h5"} >Appointment Section</Typography>
        </Box>
    );
};

export default Appointment;
