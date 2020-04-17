import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { classes } from "../url";
import { fetchDnD } from "../../../actions";

const Races = props => {

    const clickHandler = e => {
        e.preventDefault();
        props.fetchDnD(classes);
    }

    return(
        <div>
            <h1> Select A Race</h1>
            <button onClick = {clickHandler}> 
                <Link to="/building/classes">
                    Move Onto Classes
                </Link>
            </button>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return{}
}

export default connect(mapStateToProps,{fetchDnD})(Races);