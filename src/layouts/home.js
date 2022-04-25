import React from 'react';
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Carousel from "../components/Carousel";




const style = ({
    box: {
        display: "flex",
        backgroundColor: "#fce4ec",
        height: "95vh",
        width: "100%",
        position: "sticky",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "0",
        marginTop:"0",
    },
    paper: {
        display: "flex",
        width: "90vw",
        height: "80vh",
    }

})


const Home = () => {
    return (
        <Box style={style.box} id={"home"} >
            <Paper elevation={24} sx={style.paper}>
                <Carousel/>
            </Paper>
        </Box>
    );
};

export default Home;
