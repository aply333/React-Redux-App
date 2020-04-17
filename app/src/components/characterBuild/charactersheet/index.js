import React from "react";
import { connect } from "react-redux";
import { Sheet } from "./sheetStyles";

const CharacterSheet = props => {
    return(
        <Sheet>
            <h2> Current Build </h2>
            <p>Race:</p>
            <br/>
            <p>Class:</p>
        </Sheet>
    )
}

export default CharacterSheet;