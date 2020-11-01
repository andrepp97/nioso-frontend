import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// CREATE STYLE
const useStyles = makeStyles(() => ({
    root: {
        padding: '56px 32px',
    },
    opacity70: {
        opacity: .7
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


const DriversPage = () => {
    // VARIABLES
    const classes = useStyles()

    // RENDER
    return (
        <div className={classes.root}>
            <h2 className={classes.opacity70}>
                DRIVERS
            </h2>
            <hr className={classes.opacity70} />
            
        </div>
    );
};

export default DriversPage;