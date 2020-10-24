import React from 'react';

import {SearchInputContainer, InputForm} from './SearchInputStyles.js';



const SearchInput = (props) => {



	return (

		<SearchInputContainer>
			<InputForm type='text' placeholder='Search' onChange={props.handleChange} />
			<span> Favourites <span role="img" aria-labelledby="heart">❤️</span><sup>{props.length}</sup> </span>
		</SearchInputContainer>

		)
}



export default SearchInput;