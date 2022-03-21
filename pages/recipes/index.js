import React, { Component } from 'react'
import RecipeOverview from '../../components/recipes/RecipeOverview/RecipeOverview'
import Contentful from '../../lib/contentful'

export default class Index extends Component {
	constructor(props) {
		super(props)
	}

  render() {
	return (
		<>
	    <div>Index</div>
		{this.props.recipes.items.map(recipe => 
			<RecipeOverview key={recipe.sys.id} recipe={recipe}/>
		)}
		</>
	)
  }
}

export async function getServerSideProps() {
	const client = Contentful.getClient()
	const entries = await client.getEntries()

	return {
		props: {
			recipes: entries
		}
	}
}