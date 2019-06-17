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
  buttons: {
    "&$selected": {
      color: "#CC3300",
    }
  },
  selected: {}
});
function Footernav({ match }) {
  console.log(match);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  //const { match, location, history } = props;
  return (
    <BottomNavigation value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction classes={{
        root: classes.buttons,
        selected: classes.selected
      }} component={Link} to={`jobs`} label="Home" value="home" icon={<DashboardIcon />} />
      <BottomNavigationAction classes={{
        root: classes.buttons,
        selected: classes.selected
      }} component={Link} to={`proposals`} label="Proposals" value="proposals" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction classes={{
        root: classes.buttons,
        selected: classes.selected
      }} component={Link} to={`contracts`} label="Contracts" value="contracts" icon={<PeopleIcon />} />
    </BottomNavigation>
  );
}

export default withRouter(Footernav);
