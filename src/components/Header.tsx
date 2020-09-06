import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { useApplicationState } from '../infra/applicationState/ApplicationState';

interface HeaderProps {

}

const useStyles = makeStyles((theme: Theme) => ({
  search: {
    width: 470,
  },

  image: {
    width: 40,
    height: 40,
    border: "1px solid transparent",
    borderRadius: "50%",
    background: "#4165EB",
    textAlign: "center",
    lineHeight: '40px',
    letterSpacing: "1px",
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold"
  },

  nameWrapper: {
    marginLeft: 15,
    textAlign: 'left'
  },

  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3E3E3E',
    lineHeight: '23px'
  },

  title: {
    fontSize: 14,
    color: '#8A8A8A',
    lineHeight: '18px'
  },

  dropDownArrow: {
    marginLeft: 10,
    marginTop: 6,
    color: '#B3B3B3'
  },

  arrowUp: {
    transform: 'rotate(180deg)'
  }

}));

function getInitials(fname: string, lname: string) {
  return (fname.charAt(0) + lname.charAt(0));
}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();

  const { globalState } = useApplicationState();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.clear();
    var location = window.location.href;
    location = location.substring(0, location.lastIndexOf("/"));
    window.location.href = location;
  }

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      style={{ borderBottom: '1px solid #D3D3D3' }}
    >

      <Toolbar style={{ paddingLeft: 48 }}>

        <div style={{ flexGrow: 1 }}></div>

        <div>
          <IconButton
            onClick={handleMenu}
            color="inherit"
            style={{ borderRadius: 0 }}
          >
            <div style={{ display: 'flex' }}>
              <div className={classes.image}>{getInitials(globalState.firstName, globalState.lastName)}</div>
              <div className={classes.nameWrapper}>
                <div className={classes.userName}> {globalState.firstName + " " + globalState.lastName} </div>
                <div className={classes.title}> {globalState.type.toLowerCase()} </div>
              </div>
              <ArrowDropDownIcon className={open ? clsx(classes.dropDownArrow, classes.arrowUp) : classes.dropDownArrow} />
            </div>
          </IconButton>

          <Menu
            id="menu-appbar"
            style={{ marginTop: 60 }}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </div>

      </Toolbar>

    </AppBar>
  );
}

export default Header;