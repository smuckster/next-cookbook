import React, { Component } from 'react'
import Ingredient from './Ingredient/Ingredient'

export default class IngredientContainer extends Component {
  constructor(props) {
	  super(props)
  }

  render() {
	return (
		<div className="ingredient-container">
		{Object.keys(this.props.ingredients).map((key) => 
			<Ingredient 
				key={key} 
				index={key} 
				ingredient={this.props.ingredients[key]} 
				editable={true} 
				deleteIngredient={this.props.deleteIngredient}
				editIngredient={this.props.editIngredient}
				updateEditedIngredient={this.props.updateEditedIngredient}
				currentlyEditing={key == Object.keys(this.props.currentlyEditing)[0] ? true : false}
			/>	
		)}
		</div>
	)
  }
}
