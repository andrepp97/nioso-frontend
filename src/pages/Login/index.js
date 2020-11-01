import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

// Other Imports
import { useAuth } from '../../context/AuthProvider';
import { keyPrefix } from '../../helper/StaticData';

// CREATE STYLE
const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginCard: {
        width: '36vw',
        height: 'auto',
        minWidth: '200px',
        padding: '1.5rem 2rem',
        display: 'flex',
        flexDirection: 'column'
    },
    loginTitle: {
        opacity: .8,
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '.5rem',
    },
    my1: {
        marginTop: '8px',
        marginBottom: '8px',
    },
    py1: {
        paddingTop: '8px',
        paddingBottom: '8px',
    }
}))


const Login = () => {
    // VARIABLES
    const classes = useStyles()
    const { userState, dispatch } = useAuth()

    // STATE
    const [state, setState] = useState({
        username: "",
        password: "",
    })
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    // VALIDATE INPUT
    const inputValidation = () => {
        let err

        if (!state.password) err = "Password cannot be empty"
        if (!state.username) err = "Username cannot be empty"

        if (err) alert(err) 
        return err
    }

    // LOGIN
    const onLogin = () => {
        if (!inputValidation()) {
            if (state.username === "sysadmin" && state.password === "admin") {
                setLoading(true)
                let userToken = "vW79.pLJ22sY"
                localStorage.setItem(keyPrefix, userToken)
                setTimeout(() => {
                    dispatch({
                        type: "LOGIN",
                        id: 1,
                        username: "Nioso",
                        role: "sysadmin",
                        token: userToken,
                    })
                }, 1000)
            } else {
                alert("Unauthorized")
            }
        }
    }
    
    // LOGIN ON KEYPRESS
    const onKeyEnter = (event) => {
        if (event.key === "Enter") {
            onLogin()
        }
    }

    return userState.userToken
    ? <Redirect to="/dashboard" />
    : (
        <div id="login-bg" className={classes.root}>
            <Card className={classes.loginCard}>

                <p className={classes.loginTitle}>
                    LOGO
                </p>

                <TextField
                    size="small"
                    label="Username"
                    variant="filled"
                    className={classes.my1}
                    onChange={e => setState({...state, username: e.target.value})}
                />

                <FormControl size="small" variant="filled" className={classes.my1}>
                    <InputLabel htmlFor="password-field">
                        Password
                    </InputLabel>
                    <FilledInput
                        id="password-field"
                        onKeyUp={onKeyEnter}
                        value={state.password}
                        type={showPassword ? 'text' : 'password'}
                        onChange={e => setState({...state, password: e.target.value})}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    edge="end"
                                    onMouseDown={e => e.preventDefault()}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button
                    color="primary"
                    variant="contained"
                    disabled={loading}
                    onClick={onLogin}
                    className={clsx([classes.my1, classes.py1])}
                >
                    {
                        loading
                        ? <CircularProgress size={20} />
                        : 'Login'
                    }
                </Button>
                
            </Card>
        </div>
    );
};

export default Login;