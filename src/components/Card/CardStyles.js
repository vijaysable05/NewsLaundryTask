import styled from 'styled-components';


export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #9e9e9e66;
	box-shadow: 5px 10px 5px #888888;
	padding: 5%;
	height: 100%;
	width: 90%;
	max-width: 100%;
`

export const UpperContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 90%;
	width: 100%;
`

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 10%;
	width: 100%;

	input[type=checkbox] {
	  height: 15px;
	  width: 15px;
	  position: relative;
	  background-color: #9e9e9e66;
	  outline: none;
	  cursor: pointer;
	  -webkit-appearance: none;
	  transform: rotate(45deg);
	}

	input[type=checkbox]:before {
	  position: absolute;
	  background-color: #9e9e9e66;
	  content: "";
	  height: 60%;
	  width: 100%;
	  top: -59%;
	  border-radius: 75px 75px 0 0;
	}

	input[type=checkbox]:after {
	  position: absolute;
	  background-color: #9e9e9e66;
	  content: "";
	  height: 60%;
	  width: 100%;
	  right: 79%;
	  top: 20%;
	  transform: rotate(-90deg);
	  border-radius: 75px 75px 0 0;
	}

	input[type=checkbox]:checked,
		input:checked[type=checkbox]:before,
		input:checked[type=checkbox]:after {
			background-color: #fe0f42;	
	}

	span {
		font-size: 0.9em;
		cursor: pointer;
	}

	a, a:hover, a:focus, a:active {
		text-decoration: none;
		color: inherit;
	}

`

export const TitleContainer = styled.div`
	display: flex;
	height: 40%;
	width: 100%;
	padding-bottom: 4%;
	border-bottom: 1px solid #9e9e9e66;

	span {
		font-size: 1em;
		font-weight: bold;
	}
`

export const TitleContainer2 = styled.div`
	display: flex;
	height: 60%;
	width: 100%;
	margin: 10px 0;
	span {
		font-size: 0.9em;
	}
`

export const ImageContainer = styled.div`
	display: flex;
	height: 70%;
	width: 100%;

	img {
		height: 100%;
		width: 100%;
	}
`

