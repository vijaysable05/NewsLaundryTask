import React from 'react';

import {CardContainer, UpperContainer, BottomContainer, TitleContainer, TitleContainer2} from './CardStyles.js';

const Card = (props) => {

	return (

		<CardContainer>
			<UpperContainer>
				<TitleContainer>
					<span> {props.data.item.headline[0]} </span>
				</TitleContainer>
				<TitleContainer2>
					<span> {props.data.story.subheadline ? props.data.story.subheadline : null} </span>
				</TitleContainer2>
			</UpperContainer>
			<BottomContainer>
				<a href={props.data.story.url} target="_blank" rel="noopener noreferrer"><span> Read More... </span></a>
				<input id={props.data.id} type="checkbox" value={props.data.id} onClick={props.handleClick}/>
			</BottomContainer>
		</CardContainer>

	)
}




export default Card;

// <ImageContainer>
// 				<img src={`https://${props.data.story['hero-image-s3-key']}`} alt='img'/>
// 			</ImageContainer>