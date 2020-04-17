import React from "react";
import { connect } from "react-redux";
import MenuItem from "./menuItem";
import { MenuContainer } from "./stylesMenu";

const Menu = (props) => {
  console.log("within menu", props.choices);

  return (
    <MenuContainer>
        <h2>Options</h2>
      <ul>
        {props.choices.map((item) => (
          <MenuItem
             item={item}
             reduxAction = {props.reduxAction}/>
        ))}
      </ul>
    </MenuContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    choices: state.choices,
  };
};

export default connect(mapStateToProps, {})(Menu);
