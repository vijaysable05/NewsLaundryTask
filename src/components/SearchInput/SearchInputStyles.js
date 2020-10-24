import styled from 'styled-components';



export const SearchInputContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 100%;
	width: 100%;

	span {
		margin-top: 1%;
		font-weight: bold;
	}
`

export const InputForm = styled.input`
	display: flex;
	margin-top: 1%;
	height: 35%;
	width: 20%;
	border: none;
	border-bottom: 1px solid black;
	background: #9e9e9e66;
	outline: none;

	@media screen and (max-width: 500px) {
	    height: 40%;
	    width: 35%;
	}

	@media screen and (max-height: 500px) {
		margin-top: 2%;
	    height: 70%;
	    width: 30%;
	}
`



