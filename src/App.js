import React, { Component } from "react";
/*import { makeStyles } from "@material-ui/core/styles";*/
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import "./App.css";

/*const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));*/

/*const classes = useStyles();*/

const cities = [
  "Asunción,py",
  "Buenos Aires,ar",
  "Washington,us",
  "Ciudad de México,mx",
  "Barcelona,es",
  "Lima,pe",
];

class App extends Component {
  constructor() {
    super();

    this.state = { city: null };
  }

  handleSelectedLocation = (city) => {
    this.setState({ city });
    console.log(`handleSelectedLocation: ${city}`);
  };

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" /*className={classes.title}*/>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={3}>
              <div className="detail">
                {city && <ForecastExtended city={city} />}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
