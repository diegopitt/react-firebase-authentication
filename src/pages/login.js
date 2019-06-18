import React, { Component } from "react";
import classNames from 'classnames';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, TextField } from '@material-ui/core';
import Bubble from "../Bubble/Bubble.js";
import BubbleHeader from "../Bubble/BubbleHeader.js";
import BubbleContent from "../Bubble/BubbleContent.js";
import BubbleLabel from "../Bubble/BubbleLabel.js";
import BubbleFooter from "../Bubble/BubbleFooter.js";
import { authWrapper } from "../auth/AuthWrapper";

const styles = theme => ({
  root: {},
  form: {},
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  BubbleFooter: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
});

const login = authWrapper(class extends Component {
  state = {
    values: {
      password: '',
      email: ''
    }
  };
  handleFieldChange = (field, value) => {
    const newState = { ...this.state };
    newState.values[field] = value;
    this.setState(newState, this.validateForm);
  };

  async handleSubmit() {
    this.props.authenticate(this.state.values.email, this.state.values.password).then(function () {
      this.props.history.push('/dashboard/jobs');
    }.bind(this));

  }
  handleSignOut() {
    this.props.signout();
  }

  render() {
    const { classes, className, history, location, match } = this.props;
    const { values } = this.state;
    const rootClassName = classNames(classes.root, className);
    return <GridContainer style={{ minHeight: '100vh' }} container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <Bubble  {...{ className, history, location, match }} className={rootClassName}>
          <BubbleHeader>
            <BubbleLabel subtitle="Enter your credentials" title="Log In" />
          </BubbleHeader>
          <BubbleContent>
            <form className={classes.form}>
              <TextField className={classes.textField} label="Enter your email" name="email" 
                type="text"
                value={values.email}
                onChange={event =>
                  this.handleFieldChange('email', event.target.value)
                }
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="Password"
                name="password"
                onChange={event =>
                  this.handleFieldChange('password', event.target.value)
                }
                type="password"
                value={values.password}
                variant="outlined"
              />
            </form>
          </BubbleContent>
          <BubbleFooter className={classes.BubbleFooter}>
            <Button color="primary" variant="outlined" onClick={this.handleSubmit.bind(this)}>Next</Button>
          </BubbleFooter>
        </Bubble>
      </GridItem>
    </GridContainer>
  }
})
export default withStyles(styles)(login)