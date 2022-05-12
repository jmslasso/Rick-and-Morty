import styled, {keyframes} from "styled-components";


export const HoverData = styled.div`
    position: absolute;
    bottom: 20px;
    left:20px;
    width:90%;
    text-overflow: clip;
    overflow: hidden;
    opacity: 0;
    background: transparent;
    border: solid;
    transition: 1.5s ease-in all;
    gap: 10px;
`;

export const CardContainer = styled.div`
    display:flex;
    list-style-type:none;
    padding:0;
    justify-content:center;
    width:100vw;
    height: auto;
    align-items:center;

`;

const glow = keyframes`
    100% { filter: hue-rotate(360deg); }
`;

export const LeftData = styled.div`
    width:500px;
    height:500px;
    position: relative;

    img{
        width: 500px;
        height:500px;
    }

    &:hover{
        div{
            opacity: 1;
        }
    }
  
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 3px solid transparent;
        transition: border-width 0.25s;
        border-image: linear-gradient(135deg,#A0038B, #FD0000, #FDFD00);
        border-image-slice: 1;
        pointer-events: none;
        filter: hue-rotate(0deg);
        animation: 1.5s linear 0s infinite normal both paused ${glow};
        border-width: 7px;
        animation-play-state: running;
    }

`;