import styled from "styled-components";
import { beige } from "./components/colors";

export const Container = styled.div`
    height: 900px;
    width:  1100px;
    margin: auto auto;
    margin-top: 5%;
  
`;

export const Contents = styled.div`
    position: absolute;
    top: 15%;
    left: 27%;
    background-color:${beige};
    width:400px;
    height:60vh;
    padding: 5px;
    box-shadow: 6px  6px 10px grey;
`;