import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = ({
    box: {
        backgroundColor: "yellow",
        height: "100vh",
        width: "100vw",
    }

})

const Appointment = () => {
    return (
        <Box style={style.box} id={"appointment"}>
           <Typography variant={"h6"} >
               Appointement Section
           </Typography>
        </Box>
    );
};

export default Appointment;
