import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Ingredient extends Component {
  constructor(props) {
	  super(props)

	  this.state = {
		  editedIngredientName: this.props.ingredient
	  }

	  this.updateEditedIngredient = this.updateEditedIngredient.bind(this)
  }

  updateEditedIngredient(e) {
	  this.setState(state => ({
		  editedIngredientName: e.target.value
	  }))
  }

  saveEditedIngredient(e) {

  }

  render() {
	return (
	  <div 
	  	className={'ingredient' + (this.props.editable ? ' editable' : '')}
		data-index={this.props.index}
	  >
		{
			this.props.currentlyEditing
			? <input 
				type="text" 
				value={this.state.editedIngredientName} 
				onChange={this.updateEditedIngredient} 
				onKeyDown={this.props.updateEditedIngredient} 
				autoFocus
			  />
			: <span onClick={this.props.editIngredient}>{this.props.ingredient}</span>
		}
		<div className="delete-button" title="Remove ingredient" onClick={this.props.deleteIngredient}>
			<FontAwesomeIcon icon="fa-regular fa-circle-xmark" />
		</div>
	  </div>
	)
  }
}
