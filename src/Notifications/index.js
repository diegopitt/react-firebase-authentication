import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { ArrowForwardIos as ArrowForwardIosIcon, Payment as PaymentIcon, PeopleOutlined as PeopleIcon, Code as CodeIcon, Store as StoreIcon } from '@material-ui/icons';
import styles from './styles';
import empty from "../assets/images/empty.png"

const icons = {
  order: {
    icon: <PaymentIcon style={{ width: '22px', height: '22px' }} />,
    color: 'blue'
  },
  user: {
    icon: <PeopleIcon style={{ width: '22px', height: '22px' }} />,
    color: 'red'
  },
  product: {
    icon: <StoreIcon style={{ width: '22px', height: '22px' }} />,
    color: 'green'
  },
  feature: {
    icon: <CodeIcon style={{ width: '22px', height: '22px' }} />,
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
              <Typography className={classes.listItemTextPrimary}>User Notifications</Typography>
              <Typography className={classes.subtitle} variant="body2">
                {notifications.length} new notifications
              </Typography>
            </div>
            <div className={classes.content}>
              <List component="div">
                {notifications.map(notification => (
                  <Link key={notification.id} to="#" style={{ textDecoration: 'none' }}>
                    <ListItem className={classes.listItem} component="div" onClick={onSelect}>
                      <ListItemIcon className={classes.listItemIcon} style={{ color: icons[notification.type].color, width: "42px" }}>
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
                <Button component={Link} size="small" to="#" variant="outlined">
                  See all
                </Button>
              </div>
            </div>
          </Fragment>
        ) : (
            <div className={classes.empty}>
              <div className={classes.emptyImageWrapper}>
                <img alt="Empty list" className={classes.emptyImage} src={empty} />
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
