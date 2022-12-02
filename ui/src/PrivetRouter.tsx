import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { postToApi } from "./util/api";

function PrivetRouter () {
    const navigate = useNavigate();

    const hasAuth = Boolean(localStorage.getItem("jwt"));

    return (
        hasAuth ? <></> :
            <Navigate to="/Login" />
    );

}

export default PrivetRouter;
