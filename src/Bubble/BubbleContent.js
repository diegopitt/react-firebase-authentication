import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#ffffff',
    flexGrow: 1
  },
  noPadding: {
    padding: 0
  }
});

const BubbleContent = props => {
  const { classes, className, children, noPadding, ...rest } = props;
  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.noPadding]: noPadding
    },
    className
  );
  return (
    <div {...rest} className={rootClassName}>
      {children}
    </div>
  );
};

BubbleContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  noPadding: PropTypes.bool
};

export default withStyles(styles)(BubbleContent);
