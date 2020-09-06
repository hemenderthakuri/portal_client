import React from 'react';
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';


interface SideBarProps {
    type: string
}

const drawerWidth = 240;

const ListItemStyled = withStyles({
    root: {
        color: '#B2C2FF',
    },

    selected: {
        color: '#FFFFFF',
        backgroundColor: '#B2C2FF80 !important'
    }
})(ListItem);


const useStyles = makeStyles((theme: Theme) => ({

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },

    drawerOpen: {
        width: drawerWidth,
        background: '#4165EB',
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
        background: '#4165EB',
        overflowX: 'hidden',
        width: 60
    },

    logoWrapper: {
        padding: '17px 6px',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'

    },

    listItemText: {
        marginTop: 8,
        marginBottom: 8
    },

    subList: {
        marginLeft: 26,
        marginTop: 15,
        marginBottom: 15
    },

    subListItemText: {
        color: 'inherit',
        lineHeight: '18px',
        letterSpacing: '0.14px',
        padding: '8px 0 8px 42px',
        marginTop: 0,
        marginBottom: 0,
        borderLeft: '3px solid'
    },

    listItemIcon: {
        color: 'inherit'
    },

    badgeRoot: {
        width: '100%',
        alignItems: 'center'
    },

    badge: {
        color: '#4165EB',
        background: '#FFF',
        top: 6,
        fontSize: 10,
        fontWeight: 'bold',
        height: 15,
        right: 0,
        transition: theme.transitions.create(['top'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard,
        }),
    },

    badgeOpen: {
        top: 18,
    }

}));


const pathList = ["dashboard", "applications", "jobsearch", "jobdetails"];

const SideBar: React.FC<SideBarProps> = ({ type }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const routerHistory = useHistory();


    const handleDrawer = () => {
        setOpen(!open);
    };


    const handleClick = (target: string) => {
        if (pathList.includes(target)) {
            routerHistory.push(target);
        }
    }

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}>
            <div className={classes.logoWrapper}>
                l O g O
            </div>

            <List>
                <ListItemStyled button onClick={handleDrawer}>
                    <ListItemIcon className={classes.listItemIcon} ><MenuIcon /></ListItemIcon>
                    <ListItemText className={classes.listItemText} primary="Close Menu" disableTypography={true} />
                </ListItemStyled>
            </List>

            {type === "CANDIDATE" ?
                <List>
                    <ListItemStyled button onClick={e => handleClick("jobsearch")}>
                        <ListItemIcon className={classes.listItemIcon}><SearchIcon /></ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Job Search" disableTypography={true} />
                    </ListItemStyled>

                    <ListItemStyled button onClick={e => handleClick("applications")}>
                        <ListItemIcon className={classes.listItemIcon}><DescriptionIcon /></ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Applications" disableTypography={true} />
                    </ListItemStyled>

                </List> : null}


            {type === "RECRUITER" ?
                <List>
                    <ListItemStyled button onClick={e => handleClick("dashboard")}>
                        <ListItemIcon className={classes.listItemIcon}><HomeIcon /></ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Dashboard" disableTypography={true} />
                    </ListItemStyled>

                </List> : null}
        </Drawer >
    );
}

export default SideBar;