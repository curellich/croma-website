import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const style = ({
    box: {
        backgroundColor: "blue",
        height: "100vh",
        width: "100vw"
    }

})

const Home = () => {
    return (
        <Box style={style.box} id={"home"}>
          <Typography variant={"h1"} >Home Section</Typography>
        </Box>
    );
};

export default Home;
