import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from '../../api/Axios';

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


const Dashboard = () => {
    // VARIABLES
    const classes = useStyles()

    // STATE
    const [data, setData] = useState(null)

    // LIFECYCLE
    useEffect(() => {
        const getData = () => {
            Axios.get('users')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
        }

        getData()
    }, [])

    // RENDER
    return (
        <div className={classes.root}>
            <h2 className={classes.opacity70}>
                DASHBOARD
            </h2>
            <hr className={classes.opacity70} />
            <ul>
                {data ? data.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                )) : null}
            </ul>
        </div>
    );
};

export default Dashboard;