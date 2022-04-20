import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const style = ({
    box: {
        backgroundColor: "green",
        height: "100vh",
        width: "100%"
    }
})

const About = () => {
    return (
        <Box style={style.box} id={"about"}>
            <Typography variant={"h1"}>About Section</Typography>
        </Box>
    );
};

export default About;
