import React from 'react';
import {FormControl, FormHelperText, Input, InputLabel, OutlinedInput} from "@mui/material";
import "../App.css"
import Button from "@mui/material/Button";


const Formular = () => {

    const handleSubmit = ()=> {

    }

    return (
        <div className="Formular" >
            <FormControl margin={"dense"}>
                <InputLabel htmlFor={"text"}>Nombre y Apellido</InputLabel>
                <Input id="nombreApellido" type={"email"} aria-describedby={"email-helper"}/>
                <FormHelperText id={"email-helper"}>Tu nombre y apellido</FormHelperText>
            </FormControl>
            <FormControl  margin={"dense"}>
                <InputLabel htmlFor={"email"}>Email</InputLabel>
                <Input id="email" type={"email"} aria-describedby={"email-helper"}/>
                <FormHelperText id={"email-helper"}>Ingresa un correo válido</FormHelperText>
            </FormControl>
            <FormControl className={"formularTextArea"} margin={"dense"}>
                <OutlinedInput id="consulta" placeholder="Escribí tu consulta" style={{height:"200px", justifyContent:"start", alignItems:"start"}}  />
            </FormControl>
            <Button onSubmit={handleSubmit} variant={"contained"} color={"primary"}>
                Enviar
            </Button>
        </div>
    )
};


export default Formular;
