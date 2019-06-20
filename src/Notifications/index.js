import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { ArrowForwardIos as ArrowForwardIosIcon, Payment as PaymentIcon, PeopleOutlined as PeopleIcon, Code as CodeIcon, Store as StoreIcon } from '@material-ui/icons';
import styles from './styles';

const icons = {
  order: {
    icon: <PaymentIcon />,
    color: 'blue'
  },
  user: {
    icon: <PeopleIcon />,
    color: 'red'
  },
  product: {
    icon: <StoreIcon />,
    color: 'green'
  },
  feature: {
    icon: <CodeIcon />,
    color: 'purple'
  }
};

class Notifications extends Component {
  render() {
    const { className, classes, notifications, onSelect } = this.props;
    const rootClassName = classNames(classes.root, className);
    return (
      <div className={rootClassName}>
        {notifications.length > 0 ? (
          <Fragment>
            <div className={classes.header}>
              <Typography variant="h6">User Notifications</Typography>
              <Typography className={classes.subtitle} variant="body2">
                {notifications.length} new notifications
              </Typography>
            </div>
            <div className={classes.content}>
              <List component="div">
                {notifications.map(notification => (
                  <Link key={notification.id} to="#" style={{ textDecoration: 'none' }}>
                    <ListItem className={classes.listItem} component="div" onClick={onSelect}>
                      <ListItemIcon className={classes.listItemIcon} style={{ color: icons[notification.type].color }}>
                        {icons[notification.type].icon}
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.listItemTextPrimary, secondary: classes.listItemTextSecondary }} primary={notification.title} secondary={notification.when} />
                      <ArrowForwardIosIcon className={classes.arrowForward} />
                    </ListItem>
                    <Divider />
                  </Link>
                ))}
              </List>
              <div className={classes.footer}>
                <Button color="primary" component={Link} size="small" to="#" variant="contained">
                  See all
                </Button>
              </div>
            </div>
          </Fragment>
        ) : (
            <div className={classes.empty}>
              <div className={classes.emptyImageWrapper}>
                <img alt="Empty list" className={classes.emptyImage} src="../src/assets/images/empty.png" />
              </div>
              <Typography variant="h4">There's nothing here...</Typography>
            </div>
          )}
      </div>
    );
  }
}

Notifications.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

Notifications.defaultProps = {
  notifications: [],
  onSelect: () => { }
};

export default withStyles(styles)(Notifications);
