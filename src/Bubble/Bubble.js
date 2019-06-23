import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from './Paper';

const styles = () => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
    marginBottom: "30px"
  }
});

const Bubble = props => {
  //console.log(props);
  const { classes, className, children, ...rest } = props;
  return (
    <Paper {...rest} className={classes.paper} outlined elevation={0} squared={false}>
    {children}
    </Paper>
  );
};

Bubble.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  outlineGrey: PropTypes.bool,
  outlineRed: PropTypes.bool
};

export default withStyles(styles)(Bubble);
