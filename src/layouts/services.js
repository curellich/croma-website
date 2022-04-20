import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = ({
    box: {
        backgroundColor: "lightgreen",
        height: "100vh",
        width: "100%",
    }

})

const Services = () => {
    return (
        <Box style={style.box} id={"services"}>
            <Typography variant={"h1"} >Services Section</Typography>
        </Box>
    );
};

export default Services;
