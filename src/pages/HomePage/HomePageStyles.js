import styled from 'styled-components';


export const HomepageContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`

export const UpperContainer = styled.div`
	height: 10vh;
	width: 100%;
`

export const BottomContainer = styled.div`
	height: 90%;
	justify-content: center;
	align-items: center;
	width: 100%;
`

export const GridContainer = styled.div`
	margin: 20px;
	display: grid;
	grid-gap: 3rem;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	padding-bottom: 30px;
`
