import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = ({
    box: {
        backgroundColor: "skyblue",
        height: "95vh",
        width: "100%",
    }

})

const Contact = () => {
    return (
        <Box style={style.box} id={"contact"}>
            <Typography variant={"h1"} >Contact Section</Typography>
        </Box>
    );
};

export default Contact;
