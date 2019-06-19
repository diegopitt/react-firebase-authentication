import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";
const Style = {
  cardCategoryWhite: {
    color: '#ffffff',
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: '#ffffff',
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: '#ffffff',
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class job extends Component {
  handleBack() {
    this.props.history.push('/dashboard/jobs');
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Job details</h4>
              <p className={classes.cardCategoryWhite}>
                Posted on 15th june, 2019
                </p>
            </CardHeader>
            <CardBody>
              <p>The jobID is {this.props.match.params.jobID}</p>
              <Button onClick={this.handleBack.bind(this)} type="submit" variant="contained" color="primary">Go back</Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}
export default withStyles(Style)(job);