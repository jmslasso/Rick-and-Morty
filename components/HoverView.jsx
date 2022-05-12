import styled from 'styled-components'

export const HoverView = styled.button`
    position: absolute;
    right: 15px;
    margin: 20px;
    cursor: pointer;
    width:100px;
    height: 30px;
    background: none;
    font-family: 'Roboto';
    &:hover{
      background: black;
      transition: 2s ease-in;
      color: white;
      border-color: wheat;
    }
`;