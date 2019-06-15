import React , { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withRouter } from "react-router";
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
});
function Footernav({ ...props }) {
  //console.log(props);
  const classes = useStyles(props);
  const [value, setValue] = useState(0);
  //const { match, location, history } = props;
  return (
    <BottomNavigation value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction component={Link} to="jobs" value="home" label="Home" icon={<DashboardIcon />} />
      <BottomNavigationAction component={Link} to="proposals" value="proposals" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction component={Link} to="contracts" label="contracts" icon={<PeopleIcon />} />
    </BottomNavigation>
  );
}

export default withRouter(Footernav);
