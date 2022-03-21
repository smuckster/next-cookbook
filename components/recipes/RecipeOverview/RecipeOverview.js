import React, { Component } from 'react'

export default class RecipeOverview extends Component {
	constructor(props) {
		super(props)
	}

    render() {
	  return (
	    <div className="recipe-overview-card">
			<div className="recipe-title">{this.props.recipe.fields.title}</div>
		</div>
	  )
    }
}
