import React from 'react';

import {HomepageContainer, UpperContainer, BottomContainer, GridContainer} from './HomePageStyles.js';

import SearchInput from '../../components/SearchInput/SearchInput.js';
import Card from '../../components/Card/Card.js';
import json from './reports.json'

class HomePage extends React.Component {
	constructor() {
		super()
		this.state = {
			data: null,
			searchField: '',
			favouriteIds: [],
			length: 0
		}
	}

	renderValues = () => {
		let arr = JSON.parse(localStorage.getItem('arrays'))
		if(arr.length > 0) {
			for(let i=0; i<arr.length; i++) {
				document.getElementById(arr[i]).click()
			}
		}
	}

	async componentDidMount() {
		await this.setState({data: json.items})
		await this.renderValues()
	}

	handleChange = (event) => {
		this.setState({searchField: event.target.value}, () => {
			if(this.state.searchField === '') {
				let arr = JSON.parse(localStorage.getItem('arrays'))
				if(arr.length > 0) {
					for(let i=0; i<arr.length; i++) {
						if(document.getElementById(arr[i]).checked === false) {
							document.getElementById(arr[i]).checked = true
						}
					}
				}
			}
		})
	}

	handleClick = (e) => {
		if(e.target.checked === true) {

			this.setState((prevState) => ({ favouriteIds: [...this.state.favouriteIds, e.target.value], length: prevState.length + 1 }),
			() => {
				localStorage.setItem('arrays', JSON.stringify(this.state.favouriteIds))
				localStorage.setItem('length', JSON.stringify(this.state.length))
			})
			

		} else if(e.target.checked === false) {

			let arr = this.state.favouriteIds.filter((id) => {
				return id !== e.target.value
			})
			this.setState((prevState) => ({ favouriteIds: arr, length: prevState.length - 1 }), () => {
				localStorage.setItem('arrays', JSON.stringify(arr))
				localStorage.setItem('length', JSON.stringify(this.state.length))
			})

		}
	}

	displayCards() {

		const array2 = []

		if(this.state.data){

			const {data, searchField} = this.state;

			data.forEach((dat, i) => {
				if(dat.item.headline[0].toLowerCase().includes(searchField.toLowerCase())) {
					array2.push(<Card key={i} data={dat} handleClick={this.handleClick}/>)
				}
			})
		}

		return array2

	}


	render() {
		return (

			<HomepageContainer>
				<UpperContainer>
					<SearchInput handleChange={this.handleChange} length={this.state.length}/>
				</UpperContainer>
				<BottomContainer>
					<GridContainer>
						{
							this.displayCards()
						}
					</GridContainer>
				</BottomContainer>
			</HomepageContainer>

		)
	}
}




export default HomePage;