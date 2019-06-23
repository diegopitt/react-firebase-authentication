import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const styles = theme => {
  return {
    root: {
      borderRadius: '6px'
    },
    squared: {
      borderRadius: 0
    },
    outlineRed: {
      border: `1px solid #CC3300`
    },
    outlineGrey: {
      border: `1px solid transparent`,
      boxShadow: "0 1px 4px 0 rgba(0,0,0, 0.14)",
    }
  };
};

const CustomPaper = props => {
  const { classes, className, outlineRed, outlineGrey, outlined, squared, children, ...rest } = props;
  const rootClassName = classNames(
    {
      [classes.root]: true,
      [classes.squared]: squared,
      [classes.outlineRed]: outlineRed,
      [classes.outlineGrey]: outlineGrey,
      [classes.outlined]: outlined
    },
    className
  );

  return (
    <Paper {...rest} className={rootClassName}>
      {children}
    </Paper>
  );
};

CustomPaper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  elevation: PropTypes.number,
  outlineGrey: PropTypes.bool,
  outlineRed: PropTypes.bool,
  outlined: PropTypes.bool,
  squared: PropTypes.bool
};

CustomPaper.defaultProps = {
  squared: false,
  outlined: true,
  elevation: 0
};

export default withStyles(styles)(CustomPaper);
