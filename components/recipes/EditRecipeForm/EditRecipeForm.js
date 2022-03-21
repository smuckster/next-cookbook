import styles from './EditRecipeForm.module.scss'
import IngredientContainer from '../IngredientContainer/IngredientContainer'
import { Component } from 'react'
import Script from 'next/script'
import Head from 'next/head'

export default class EditRecipeForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ingredients: [],
			newIngredient: '',
			ingredientId: 1,
			currentlyEditing: {}
		}

		this.updateState = this.updateState.bind(this)
		this.addIngredient = this.addIngredient.bind(this)
		this.deleteIngredient = this.deleteIngredient.bind(this)	
		this.editIngredient = this.editIngredient.bind(this)
		this.updateEditedIngredient = this.updateEditedIngredient.bind(this)
	}

	updateState(e) {
		this.setState({newIngredient: e.target.value})
	}

	addIngredient(e) {
		e.preventDefault()

		let ingredient = {}
		ingredient[this.state.ingredientId] = this.state.newIngredient

		// Increment id number so the new ingredient will have a unique one
		this.setState(state => ({
			ingredientId: this.state.ingredientId + 1
		}))

		// Add new ingredient to state and clear the input
		this.setState(state => ({
			ingredients: Object.assign({}, state.ingredients, ingredient),
			newIngredient: ''
		}))
	}

	deleteIngredient(e) {
		// Clone ingredient list and delete requested ingredient
		let ingredientList = this.state.ingredients
		delete ingredientList[e.currentTarget.parentElement.dataset.index]

		this.setState({
			ingredients: ingredientList
		})
	}

	editIngredient(e) {
		console.log('editingIngredient event:', e)
		console.log('current target', e.currentTarget)
		console.log('ingredient', this.state.ingredients[e.currentTarget.parentElement.dataset.index])
		let currentlyEditing = {}
		currentlyEditing[e.currentTarget.parentElement.dataset.index] = this.state.ingredients[e.currentTarget.parentElement.dataset.index]
		this.setState(state => ({
			currentlyEditing: currentlyEditing
		}))
	}

	updateEditedIngredient(e) {
		if (e.key === 'Enter') {
			console.log('Enter key pressed', e);

			let ingredientList = this.state.ingredients
			ingredientList[e.currentTarget.parentElement.dataset.index] = e.currentTarget.value

			this.setState(state => ({
				currentlyEditing: {},
				ingredients: ingredientList
			}))
		}
	}

	render() {
		return (
			<>
			<p>Enter your ingredients below, then press Enter to save them.</p>
			<form onSubmit={this.addIngredient}>
				<IngredientContainer 
					ingredients={this.state.ingredients} 
					deleteIngredient={this.deleteIngredient} 
					editIngredient={this.editIngredient}
					currentlyEditing={this.state.currentlyEditing}
					updateEditedIngredient={this.updateEditedIngredient}
				/>
				<input 
					type="text" 
					id="next-ingredient" 
					value={this.state.newIngredient} 
					onChange={this.updateState} 
					placeholder="Enter ingredient" 
				/>
			</form>
			</>
		)
	}
}

