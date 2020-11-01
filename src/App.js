import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// COMPONENTS
import Router from './Routes/Router';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import LoadingScreen from './components/LoadingScreen';

// Other Imports
import { useAuth } from './context/AuthProvider';
import { keyPrefix } from './helper/StaticData';

// STATIC DATA
const drawerWidth = 225;
const useStyles = makeStyles((theme) => ({
  appBar: {
    height: '48px',
    justifyContent: 'center',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    height: '48px',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: '20px',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
  content: {
    marginLeft: drawerWidth,
    minHeight: '100vh',
    transition: '.25s',
    flexGrow: 1,
  },
  contentShift: {
    marginLeft: '56px',
  },
  title: {
    flexGrow: 1,
    padding: '0 8px',
  },
  secondary: {
    textAlign: 'center',
    padding: '4px 8px',
    opacity: .8,
    margin: 0,
  },
  px1: {
    paddingLeft: '8px',
    paddingRight: '8px',
  },
  px2: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
}));


const App = () => {
  // VARIABLES
  const classes = useStyles()
  const { userState, dispatch } = useAuth()

  // STATE
  const [open, setOpen] = useState(true)

  // DRAWER HANDLER
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  // LIFECYCLE
  useEffect(() => {
    const restoreToken = () => {
      let userToken = localStorage.getItem(keyPrefix)
      if (userToken) {
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
        localStorage.removeItem(keyPrefix)
        dispatch({
          type: "LOGOUT"
        })
      }
    }

    restoreToken()
  }, [dispatch])

  // RENDER
  return userState.isLoading
  ? <LoadingScreen />
  : (
    <div>
      {
        userState.userToken
        ? <Navbar isOpen={open} classes={classes} handleDrawerOpen={handleDrawerOpen} />
        : null
      }

      {
        userState.userToken
        ? <Sidebar isOpen={open} classes={classes} handleDrawerClose={handleDrawerClose} />
        : null
      }

      <main
        className={
          userState.userToken
          ? clsx(classes.content, {[classes.contentShift]: !open})
          : ''
        }
      >
        <Router />
      </main>
    </div>
  )
}

export default App;
