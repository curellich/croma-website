import React from 'react';
import Box from "@mui/material/Box";
import {Link, Stack} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Typography from "@mui/material/Typography";

const sx = ({
    box: {
        backgroundColor: "#e1bee7",
    },
    icon: {
        color: "#0277bd",
        fontSize: "2.5rem"
    },
    title: {
        fontFamily: "Roboto",
        color: "#0277bd",
        fontWeight: "bold",
    },
    details: {
        fontFamily: "Roboto",
        color: "#565656",
        fontWeight: "bold",
        fontSize: ".9rem"
    },
    stack: {
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 6rem"
    },
    link: {
        fontFamily: "Roboto",
        color: "#565656",
        fontWeight: "bold",
        fontSize: ".9rem",
        textDecoration: "none",
    }
})

const style = ({
    container: {
        width: "200px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    titleContainer: {
        display: "flex",
        flexDirection: "column",
        padding: ".25rem"
    }
})

const TopWrap = () => {

    return (
        <Box id="top-wrap" width="100vw" sx={sx.box}>
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 1, sm: 2, md: 4}}
                sx={sx.stack}

            >
                <div  style={style.container}>
                    <AccessTimeIcon sx={sx.icon}/>
                    <div  style={style.titleContainer}>
                        <Typography variant=" subtitle1" noWrap={true} sx={sx.title}>
                            Lunes-Viernes
                        </Typography>
                        <Typography variant=" body2" sx={sx.details} noWrap={true}>
                            09:00AM - 19:00PM
                        </Typography>
                    </div>
                </div>
                <div style={style.container}>
                    <CallOutlinedIcon sx={sx.icon}/>
                    <div style={style.titleContainer}>
                        <Typography variant=" subtitle1" noWrap={true} sx={sx.title}>
                            Llamanos
                        </Typography>
                        <Link href="tel:1126486047" sx={sx.link} id={"top-wrap-link"}>
                            1126486047
                        </Link>

                    </div>
                </div>
                <div style={style.container}>
                    <LocationOnOutlinedIcon sx={sx.icon}/>
                    <div style={style.titleContainer}>
                        <Typography variant=" subtitle1" noWrap={true} sx={sx.title}>
                            Ubicanos
                        </Typography>
                        <Typography variant=" body2" sx={sx.details} noWrap={true}>
                            La Pampa 2802 - CABA
                        </Typography>
                    </div>
                </div>

            </Stack>
        </Box>
    );
};

export default TopWrap;
