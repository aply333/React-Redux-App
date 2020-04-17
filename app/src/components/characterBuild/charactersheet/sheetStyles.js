import styled from "styled-components";
import { grey } from "../../colors";

export const Sheet = styled.div`
    position:absolute;
    top: 15%;
    right: 26%;
    background-color: ${grey};
    text-align: left;
    height: 60vh;
    width: 200px;
    margin-right:15px;
    padding:5px;
    overflow-y:hidden;
    box-shadow: 6px  6px 10px grey;
`;