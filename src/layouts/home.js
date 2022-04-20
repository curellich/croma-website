import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const style = ({
    box: {
        backgroundColor: "blue",
        height: "95vh",
        width: "100%",
        position: "sticky",
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
