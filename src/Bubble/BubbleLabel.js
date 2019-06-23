import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  flexCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    fontSize: '1.3rem',
    marginRight: theme.spacing(1),
    color: "#ffc0ab",
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 500,
  },
  subtitle: {
    fontWeight: 400,
    marginLeft: theme.spacing(2),
  }
});
const BubbleLabel = props => {
  const { classes, className, icon, scolor, tcolor, title, subtitle, ...rest } = props;
  return (
    <div {...rest} className={classes.flexCenter}>
      {icon && <span className={classes.icon}>{icon}</span>}
      {title && (<Typography style={{ color: tcolor }}  className={classes.title} variant="h5">{title}</Typography>)}
      {subtitle && (<Typography style={{ color: scolor }} className={classes.subtitle} variant="subtitle2">{subtitle}</Typography>)}
    </div>
  );
};

BubbleLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  icon: PropTypes.node,
  subtitle: PropTypes.string,
  scolor: PropTypes.string.isRequired,
  tcolor: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default withStyles(styles)(BubbleLabel);
