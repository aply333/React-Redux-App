import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import LandingPage from "./components/landingpage";
import Races from "./components/characterBuild/races";
import Menu from "./components/characterBuild/menu";
import Classes from "./components/characterBuild/classes";
import { Container, Contents } from "./AppSyled";
import CharacterSheet from "./components/characterBuild/charactersheet";

const App = (props) => {
  return (
    <Container>
      <div className="App">
        <Route path="/building/" component={Menu} />
        <Contents>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/building/races" component={Races} />
          <Route exact path="/building/classes" component={Classes} />
        </ Contents>
        <Route path="/building/" component={CharacterSheet} />
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    choices: state.choices,
  };
};

export default connect(mapStateToProps, {})(App);
