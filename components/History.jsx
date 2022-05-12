import React from 'react'
import { useState } from 'react'
import { HoverData } from './CardContainer'
import { HistoryContainer } from './HistoryContainer'
import { HoverView } from './HoverView'

const History = ({isOpen,setisOpen,data,Visualize}) => {
  return (
    isOpen &&
    <HistoryContainer>
      {data.map((value, index) => (
        <div key={index}>
          <div>
            <img src={value.character.image}/>
            <button onClick={() => Visualize(value)}>
              <span>View</span>
            </button>
          </div>
        </div>
      ))} 
    </HistoryContainer> 
  )
}

export default History