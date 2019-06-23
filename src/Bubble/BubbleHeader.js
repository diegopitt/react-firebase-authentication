import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    alignItems: 'center',
    borderBottom: `1px solid #e4e6e8`,
    borderTopLeftRadius: '2px',
    borderTopRightRadius: '2px',
    backgroundColor: "transparent",
    display: 'flex',
    height: '64px',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    position: 'relative'
  },
  noDivider: {
    borderBottom: 'none'
  },
  red: {
    backgroundColor: '#CC3300',
  },
  grey: {
    backgroundColor: '#ffffff',
  },
  noPadding: {
    padding: 0
  }
});

const BubbleHeader = props => {
  const { classes, className, grey, red, noDivider, noPadding, children, ...rest } = props;
  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.noDivider]: noDivider,
      [classes.noPadding]: noPadding,
      [classes.grey]: grey,
      [classes.red]: red
    },
    className
  );
  return (
    <div {...rest} className={rootClassName}>
      {children}
    </div>
  );
};

BubbleHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  noDivider: PropTypes.bool,
  noPadding: PropTypes.bool,
  red: PropTypes.bool,
  grey: PropTypes.bool
};

export default withStyles(styles)(BubbleHeader);
