import React from 'react';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import {
  DirectionsBike,
  Storefront,
  Dashboard,
  People,
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const sideMenu = [
  {
    label: 'Dashboard',
    url: '/dashboard',
    icon: <Dashboard/>,
  },
  {
    label: 'Users',
    url: '/users',
    icon: <People/>,
  },
  {
    label: 'Drivers',
    url: '/drivers',
    icon: <DirectionsBike/>,
  },
  {
    label: 'Merchants',
    url: '/merchants',
    icon: <Storefront/>,
  },
]

const Sidebar = (props) => {
    const {
        classes,
        isOpen,
        handleDrawerClose
    } = props
    const theme = useTheme()

    return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideMenu.map((menu, idx) => (
            <NavLink
              key={idx}
              to={menu.url}
              className="url-text"
            >
              <ListItem button>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    );
};

export default Sidebar;