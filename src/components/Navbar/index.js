import React, { useState } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

// Other Imports
import { useAuth } from '../../context/AuthProvider';
import { keyPrefix } from '../../helper/StaticData';

const Navbar = (props) => {
    // PROPS
    const {
        isOpen,
        classes,
        handleDrawerOpen
    } = props

    // CONTEXT
    const { userState, dispatch } = useAuth()

    // STATE
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    // HANDLE
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    // LOGOUT
    const userLogout = () => {
        localStorage.removeItem(keyPrefix)
        dispatch({
            type: 'LOGOUT'
        })
    }

    // RENDER
    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {[classes.appBarShift]: isOpen})}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, {[classes.hide]: isOpen})}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    noWrap
                    variant="h6"
                    className={classes.title}
                >
                    NIOSO
                </Typography>
                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <PersonIcon />
                </IconButton>
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <div className={classes.px2}>
                        <p className={classes.secondary}>
                            {userState.userRole}
                        </p>
                        <hr />
                        <MenuItem onClick={handleClose}>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={userLogout}>
                            Logout
                        </MenuItem>
                    </div>
                </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;