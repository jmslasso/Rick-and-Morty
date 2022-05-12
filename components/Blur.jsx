import styled from "styled-components";

export const Blur = styled.div `
    background: rgba(255, 255, 255, 0.2); // Make sure this color has an opacity of less than 1
    backdrop-filter: blur(15px); // This be the blur
	width: 100%;
    height: 100%;
`;