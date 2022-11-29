import React, { useState, useEffect } from 'react';
import { postToApi } from "../util/api";
import "../style/Login.css";
import '../style/materialChange.css';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

import { createStyles, createTheme, InputBase, Theme } from "@mui/material";
import { makeStyles } from '@mui/material/styles';

import { useNavigate } from "react-router-dom";



function Login () {
    const navigate = useNavigate();


    return (
        <form className={ `Login` }>
            <div className='textInps'>
                <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    type="text"
                    variant="standard"
                    InputLabelProps={ { className: "text__lable" } }
                    InputProps={ { className: "text_feild" } }

                />
                <TextField
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    variant="standard"
                    InputLabelProps={ { className: "text__lable" } }
                    InputProps={ { className: "text_feild" } }

                />

            </div>
            <Button type="submit" className="SubmitBtn" variant="outlined">Login</Button>
            <Button type="button" onClick={ () => navigate("/SignUp") } className="SubmitBtn" variant="outlined">New? sign up</Button>
        </form>
    );

}

export default Login;
