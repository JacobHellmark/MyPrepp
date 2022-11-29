import React, { useState, useEffect } from 'react';
import { postToApi } from "../util/api";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/material/styles";

import "../style/Login.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { createStyles, createTheme, InputBase, Theme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';




const useStyles: Function = makeStyles((theme: Theme) => createStyles({
    root: {

    },
    textFeild: {
        color: "white",
        backgroundColor: "green"
    }
}));

const theme = createTheme();

function Login () {

    const classes = useStyles();

    return (
        <ThemeProvider theme={ theme }>
            <form className="Login">
                <div className='textInps'>
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Email"
                        type="text"
                        variant="standard"


                    />
                    <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        label="Password"
                        type="password"
                        variant="standard"

                    />

                </div>
                <Button type="submit" className="SubmitBtn" variant="outlined">Login</Button>
            </form>
        </ThemeProvider>
    );

}

export default Login;
