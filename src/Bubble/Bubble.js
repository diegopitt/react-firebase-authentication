import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import Paper from './Paper';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const Bubble = props => {
  const { classes, className, children, ...rest } = props;
  const rootClassName = classNames(classes.root, className);
  return (
    <Paper {...rest} className={rootClassName} elevation={0} outlined squared={false}>
    {children}
    </Paper>
  );
};

Bubble.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bubble);
