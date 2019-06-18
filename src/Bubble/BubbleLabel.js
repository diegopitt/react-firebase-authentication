import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
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
    color: "#ffc0ab"
  },
  subtitle: {
    fontWeight: 400,
    marginLeft: theme.spacing(2),
    color: "#fff"
  }
});
const BubbleLabel = props => {
  const { classes, className, icon, title, subtitle, ...rest } = props;
  const rootClassName = classNames(classes.root, className);
  return (
    <div {...rest} className={rootClassName}>
      {icon && <span className={classes.icon}>{icon}</span>}
      {title && (<Typography className={classes.title} variant="h5">{title}</Typography>)}
      {subtitle && (<Typography className={classes.subtitle} variant="subtitle2">{subtitle}</Typography>)}
    </div>
  );
};

BubbleLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  icon: PropTypes.node,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(styles)(BubbleLabel);
