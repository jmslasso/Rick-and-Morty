import styled from "styled-components";
import {  createGlobalStyle } from 'styled-components';


export const DataContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 93vh;
    gap: 20px;
    h1{
        color: black;
        font-family: 'Schwifty';
        text-align: center;
    }
    p{
        padding: 8px;
        color: black;
        font-size: 18px;
        font-family: 'Roboto';
    }
`;