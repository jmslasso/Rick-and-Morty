import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle';
import { keyframes } from 'styled-components';
import { useState } from 'react';
import History from './History';
import { HoverView } from './HoverView';


const glow = keyframes`
  from {
    text-shadow: 0 0 20px #000, 0 0 20px #000, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073, 0 0 20px #e60073;
  }
  to {
    text-shadow: 0 0 20px #000, 0 0 20px #ff4da6, 0 0 20px #ff4da6, 0 0 20px #ff4da6, 0 0 20px #ff4da6, 0 0 20px #ff4da6, 0 0 20px #ff4da6;
  }
`;
const Navigation = styled.div`
  width:100vw;
  height:7vh;
  background-color:violet;
  z-index: 1;
  opacity:1;
  display:flex;
  justify-content: center;
  position: relative;

  p{
      color: lightblue;
      padding: 25px;
      font-family: 'Schwifty';
      font-size: 16px;
      animation: ${glow} 1s ease-in-out infinite alternate;
  }

`;


function Nav({data,Visualize}) {
  const [isOpen, setisOpen] = useState(false)
  return (
    <Navigation>
        <img src={"./images/morty.svg"} />
        <GlobalStyle/>
        <p>Rick and Morty</p>
        <HoverView onClick={() => setisOpen(!isOpen)}>History</HoverView>
        <History data={data} Visualize={Visualize} isOpen={isOpen} setisOpen={setisOpen}/>
    </Navigation>
  )
}

export default Nav