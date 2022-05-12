import styled from "styled-components";

export const ButtonAfter = styled.div`
	display: flex;

	button {
        position: relative;
		width: 150px;
		height: 30px;
		cursor: pointer;
		background: rgba(0,0,.0, 0.5);
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
			font-family: 'Roboto';
			font-size: 15px;
			font-weight: 100;
		}
	
	}

	

`;