import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import '../style/SignUp.css';
import '../style/materialChange.css';
import { useNavigate } from 'react-router-dom';

function SignUp () {
    const navigate = useNavigate();


    return (
        <div className="SignUp">
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
                    <TextField
                        required
                        fullWidth
                        id="password2"
                        label="Password re-type"
                        type="password"
                        variant="standard"
                        InputLabelProps={ { className: "text__lable" } }
                        InputProps={ { className: "text_feild" } }

                    />

                </div>
                <Button type="submit" className="SubmitBtn" variant="outlined">Sign Up</Button>
                <Button onClick={ () => navigate("/Login") } type="submit" className="SubmitBtn" variant="outlined">Have An Account? Login</Button>
            </form>
        </div>);

}

export default SignUp;
