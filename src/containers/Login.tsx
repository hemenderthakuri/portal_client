import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications'
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
    Card, CardContent, Button, InputAdornment,
    IconButton, FormControl, InputLabel, OutlinedInput
} from '@material-ui/core';

import { Formik } from 'formik';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useApiRequest } from "../infra/hooks/useApiRequest";
import { LoginResponse } from '../models/Login';




interface LoginProps {
    onSuccess: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
    btn: {
        height: 36,
        width: 300,
        marginTop: 20
    },

    card: {
        maxWidth: 500,
        padding: 20,
        float: 'right'
    },

    input: {
        margin: 20,
        width: 400
    }

}));


const Login: React.FC<LoginProps> = ({ onSuccess }) => {
    const classes = useStyles();
    const { addToast } = useToasts();

    const [response, action, requestStatus] = useApiRequest<LoginResponse>("POST", `auth/signin`, LoginResponse);

    const [showPassword, setShowPassword] = useState(false);


    useEffect(() => {
        if (!requestStatus.isPending && !requestStatus.hasError && response instanceof LoginResponse) {
            localStorage.setItem('accessToken', response.accessToken);
            addToast(requestStatus.message, { appearance: 'success' });

            onSuccess();

        } else if (!requestStatus.isPending && requestStatus.hasError && response === null) {

            addToast(requestStatus.message, { appearance: 'error' });
        }

    }, [response, requestStatus]);

    //skipping the loading of spinner . We will implement it using useffect and requestStatus
    return (
        <Card className={classes.card} raised={true}>
            <CardContent>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        usernameOrEmail: '',
                        password: ''
                    }}
                    //validationSchema={}
                    onSubmit={(values) => {
                        action.makeRequest(values);
                    }}>

                    {(formik) => (
                        <div>
                            <FormControl className={classes.input} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                                <OutlinedInput
                                    name="usernameOrEmail"
                                    id="outlined-adornment-email"
                                    type='text'
                                    value={formik.values.usernameOrEmail}
                                    onChange={formik.handleChange}
                                    labelWidth={35}
                                />
                            </FormControl>
                            <FormControl className={classes.input} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => { setShowPassword(!showPassword) }}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={65}
                                />
                            </FormControl>

                            <div style={{ textAlign: 'center' }}>
                                <Button type="submit" className={classes.btn} variant="contained" color="primary" onClick={() => formik.handleSubmit()}>Login</Button>
                            </div>
                        </div>
                    )}</Formik>
            </CardContent>
        </Card>
    );
}

export default Login;