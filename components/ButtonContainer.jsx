import styled from "styled-components";
import { keyframes } from "styled-components";

const flickering = keyframes`
	0% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  5% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  10% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(-15deg);
  }
  15% {
    color: #ccc;
    text-shadow: none;
    transform: skewX(-15deg);
  }
  20% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  25% {
    color: #ccc;
    text-shadow: 2px 2px #912914;
    transform: skewX(0);
  }
  30% {
    color: #ccc;
    text-shadow: 2px 2px #912914;
    transform: skewX(0);
  }
  35% {
    color: #ccc;
    text-shadow: 2px 2px #912914;
    transform: skewX(0);
  }
  37% {
    color: #ccc;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  40% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  45% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  50% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  55% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  60% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  65% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  68% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  70% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  75% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(10deg);
  }
  80% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(10deg);
  }
  85% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(10deg);
  }
  90% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
  95% {
    color: #912914;
    text-shadow: 1px 1px #eee;
    transform: skewX(0);
  }
  100% {
    color: #912914;
    text-shadow: none;
    transform: skewX(0);
  }
`;


export const ButtonContainer = styled.div`

	width: 100vw;
	height: 93vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
  background-image: url("./images/background.jpg");
	//background-image: url("https://initiate.alphacoders.com/images/606/cropped-1920-1080-606024.jpg?5452");
	background-size: cover;
	gap:30px;

	div{
		color: white;
		font-family: 'Schwifty';
		font-size: 40px;
		animation-duration: 1.5s;
		animation-iteration-count: infinite;
		animation-name: ${flickering};
		animation-timing-function: step-start;
		color: #912914;
	}

	button {
		width: 150px;
		height: 30px;
		cursor: pointer;
		background: black;
		border: 1px solid #91C9FF;
		outline: none;
		transition: 1s ease-in-out;
		z-index: 3;

		&:hover{
			transition: 1s ease-in-out;
			background: #4F95DA;
		}

		svg {	
			position: absolute;
			transform: translate(-50%, -50%);
			left: 50%;
			top:50%;		
			fill: none;
			stroke: #fff;
			stroke-dasharray: 150 480;
			stroke-dashoffset: 150;
			transition: 1s ease-in-out;
			
			&:hover {
				stroke-dashoffset: -480;
			}
		}

		span {
			color: white;
			font-size: 15px;
			font-weight: 100;
		}
	
	}

	

`;