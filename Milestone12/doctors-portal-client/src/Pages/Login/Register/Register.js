import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password Did not Match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant="body1">Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic2"
                            label="Retype Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" />
                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type='submit'
                            variant='contained'
                        >Register</Button>
                    </form>}
                    {isLoading && <CircularProgress></CircularProgress>}
                    {user?.email && <Alert severity="success">This is a success alert — check it out!</Alert>}
                    {authError && <Alert severity="error">This is a error alert — check it out!{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" srcset="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;