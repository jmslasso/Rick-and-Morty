import React from 'react'
import { CardContainer } from './CardContainer'
import { LeftData } from './CardContainer'
import { HoverData } from './CardContainer'
import { Blur } from './Blur'


const Card = (props) => {
	return (
		<CardContainer>
			<LeftData>
				<img src={props.data?.character.image}/>
				<HoverData>
					<Blur>
						<h1>{props.data?.character.name}</h1>
						<p>Character ID:	{props.data?.character.id}</p>
						<p>Species:	{props.data?.character.species}</p>
						<p>Type:	{props.data?.character.type}</p>
						<p>Gender:	{props.data?.character.gender}</p>
						<p>Origin Name:	{props.data?.character.origin.name}</p>
						<p>Location Name:	{props.data?.character.location.name}</p>
					</Blur>
    			</HoverData>
    		</LeftData>
			
		</CardContainer>
		
	)
}

export default Card