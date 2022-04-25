import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FilledInput, FormControl, Input, InputLabel, Paper, TextField} from "@mui/material";
import "../App.css"


const Contact = () => {
    return (
        <Box className={"contact"}  id={"contact"}>
            <Typography className={"contactTitle"} >Contáctanos</Typography>
          <div className={"contactContainer"}>
              <Paper className={"contactFormular"} elevation={24} >
                  <Box>

                  </Box>
              </Paper>
              <Paper className={"contactPosition"} elevation={24} >

              </Paper>
          </div>

        </Box>
    );
};

export default Contact;
