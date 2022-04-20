import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = ({
    box: {
        backgroundColor: "pink",
        height: "100vh",
        width: "100%",
    }

})

const Blog = () => {
    return (
        <Box style={style.box} id={"blog"}>
            <Typography variant={"h1"} >Blog Section</Typography>
        </Box>
    );
};

export default Blog;
