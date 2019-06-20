import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import List from '@material-ui/core/List';
import MediaQuery from 'react-responsive';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';
import MenuIcon from '@material-ui/icons/Menu';
import MenuClose from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Footernav from "./Footernav";
import jobs from "../pages/jobs"
import job from "../pages/job"
import proposals from "../pages/proposals";
import contracts from "../pages/contracts";
import { getNotifications } from '../Notifications/data.js';
import Notifications from '../Notifications';
const drawerWidth = '80%';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  alert: {
    paddingRight: 16, // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#CC3300',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    paddingTop: '28px',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    PaddingBottom: '64px'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [notificationsEl, setNotificationsEl] = useState(null);
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const showNotifications = Boolean(notificationsEl);
  useEffect(() => {
    const fetchData = async () => {
      const notificationsLimit = 4;
      const { notifications, notificationsCount } = await getNotifications(notificationsLimit);
      setNotifications(notifications);
      setNotificationsCount(notificationsCount);
    };
    fetchData();
  }, []);

  const handleCloseNotifications = () => {
    setNotificationsEl(null);
  };
  const toggleDrawer = () => {
    console.log('open');
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const handleShowNotifications = event => {
    setNotificationsEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <MediaQuery query="(min-width: 767px)">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer}
              className={clsx(classes.menuButton)}>
              <MenuIcon />
            </IconButton>
          </MediaQuery>
          <MediaQuery query="(min-width: 767px)">
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Market
              </Typography>
          </MediaQuery>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <IconButton
            className={classes.notificationsButton}
            onClick={handleShowNotifications}
          >
            <Badge
              badgeContent={notificationsCount}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
        <Popover
          anchorEl={notificationsEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          onClose={handleCloseNotifications}
          open={showNotifications}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Notifications
            notifications={notifications}
            onSelect={handleCloseNotifications}
          />
        </Popover>
        <MediaQuery query="(max-width: 767px)">
          <Footernav />
        </MediaQuery>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route exact path="/dashboard/jobs" component={jobs} />
          <Route path="/dashboard/proposals" component={proposals} />
          <Route path="/dashboard/contracts" component={contracts} />
          <Route path="/dashboard/jobs/:jobID?" component={job} />
        </Switch>
        <div className={classes.appBarSpacer} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }}
        open={open}
        anchor="right">
        <div className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer}
            className={clsx(classes.menuButton)}>
            <MenuClose />
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
export default Dashboard;