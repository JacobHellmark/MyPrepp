import React, { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import '../style/SignUp.css';
import '../style/materialChange.css';
import { useNavigate } from 'react-router-dom';
import { postToApi } from '../util/api';

function SignUp () {
    const navigate = useNavigate();


    const passwordIsSafe = (password: string): boolean => {
        return true;
    };

    const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
        e.preventDefault();
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password1 = (document.getElementById("password1") as HTMLInputElement).value;
        const password2 = (document.getElementById("password2") as HTMLInputElement).value;



        if (password1 === password2 && passwordIsSafe(password1)) {
            postToApi("/user/signup", {
                email: email,
                password: password1
            }).then((resp) => {
                if (resp.status === 200) {
                    localStorage.setItem("jwt", "token");
                    navigate("/");
                }

            }
            );
        } else {
            console.log("passwords are not same");
        }


    };

    return (
        <div className="SignUp" onSubmit={ (e: React.FormEvent<EventTarget>) => handleSubmit(e) } >
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
                        id="password1"
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
