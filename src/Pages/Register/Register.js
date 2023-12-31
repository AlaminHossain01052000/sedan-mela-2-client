import { TextField } from '@mui/material';
import React, { useState } from 'react';

import useAuth from '../hooks/useAuth';
import Alert from '@mui/material/Alert';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [userInfo, setUserInfo] = useState({});
    const [rePassword, setRePassword] = useState("");
    const navigate=useNavigate();
    const { registerNewUser, error } = useAuth();

    const handleMatchingPassword = e => {
        setRePassword(e.target.value);
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...userInfo };
        newUser[field] = value;
        setUserInfo(newUser);
    }
    const handleUserRegistration = e => {
        e.preventDefault();
        if (userInfo.password === rePassword) {

            registerNewUser(userInfo.displayName, userInfo.email, userInfo.password, navigate);
            alert("Registered Successfully");
        }
        else {
            alert("Password won't matched .Re type password carefully")
        }
    }
    const handleGoToLogin = () => {
        navigate("/login")
    }

    return (
        <div className="register-page">
            <h1>Register Here</h1>
            {
                error && <Alert severity="warning" sx={{ color: "red", marginBottom: '10px' }}>{error}</Alert>

            }
            <form onSubmit={handleUserRegistration} className="register-form">
                <TextField
                    required
                    placeholder="Your Name"
                    type="text"
                    name="displayName"
                    onChange={handleOnChange}
                    className="input-field"
                />
                <TextField
                    required
                    placeholder="Your Email"
                    type="email"
                    onChange={handleOnChange}
                    name="email"
                    className="input-field"

                />
                <TextField
                    required
                    placeholder="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    className="input-field"
                />
                <TextField
                    required
                    placeholder="Re-Type Your Password"
                    type="password"
                    name="rePassword"
                    onChange={handleMatchingPassword}
                    className="input-field"
                />
                <input type="submit" className="btn-submit" />
            </form>
            <h2>Already Registered ? Click
                <span onClick={handleGoToLogin} style={{ color: "#341f97", cursor: "pointer" }}> Here </span>
                to Sign in</h2>
        </div>
    );
};

export default Register;