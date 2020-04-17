import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDnD } from "../../actions";
import { races } from "../characterBuild/url";
import { LandingButton } from "./landingStyles";

const LandingPage = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.fetchDnD(races);
  };

  return (
    <div>
      <LandingButton onClick={clickHandler}>
        <Link className = "Link" to="/building/races">Build A Character</Link>
      </LandingButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, { fetchDnD })(LandingPage);
