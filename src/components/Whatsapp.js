import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Fab} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
    box:{
        margin: 0,
        top: 'auto',
        right: "1rem",
        bottom: "1rem",
        left: 'auto',
        position: 'fixed',
    },
    fab:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0ab050',
        marginRight: "1rem",
        marginBottom: "1rem",
        color: "#fff",
    },
    whatsAppicon:{
        fontSize:"2rem",
        marginRight: ".5rem"
    },
    typografyIcon:{
        fontSize:"1.2rem"
    },
    a:{
        textDecoration: "none",
    }

};


const Whatsapp = () => {
    return (
        <Box display='flex' style={style.box} key={"whatsappButton"} >
            <Fab variant={"extended"} size={"large"} aria-label="edit" style={style.fab} onClick={()=>window.open(" https://wa.me/5491157253682","_blank","rel: noopener")} >
                    <WhatsAppIcon style={style.whatsAppicon} />
                    <Typography style={style.typografyIcon}>
                        Contáctanos
                    </Typography>
            </Fab>
        </Box>
    );
};

export default Whatsapp;
