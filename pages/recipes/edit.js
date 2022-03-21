import Head from 'next/head'
import EditRecipeForm from '../../components/recipes/EditRecipeForm/EditRecipeForm'
import { Component } from 'react'
import Contentful from '../../lib/contentful'

export default class EditRecipe extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
			<Head>
				<title>Edit Recipe</title>
			</Head>

			<main>
				<h2>Edit Recipe Page</h2>
				<EditRecipeForm />
			</main>
			</>
		)
	}
}

export async function getServerSideProps() {
	const client = Contentful.getClient()

	const entries = await client.getEntries()
	return {props: {recipes: entries}}
}