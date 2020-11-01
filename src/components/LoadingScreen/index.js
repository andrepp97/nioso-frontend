import React from 'react';
import Loader from '../../assets/img/loader.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loaderText: {
        fontWeight: 'bold',
        opacity: .8
    }
}))

const LoadingScreen = () => {
    // STYLE
    const classes = useStyles()

    // RENDER
    return (
        <div className={classes.container}>
            <img src={Loader} alt="Loading..." />
            <p className={classes.loaderText}>
                Please Wait
            </p>
        </div>
    );
};

export default LoadingScreen;