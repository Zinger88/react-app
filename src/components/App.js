import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

	state = {
		reverted: false
	}

	render() {
		console.log("step 2", this.state)
		return(
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-3">Приложение</h1>
					<button className="btn" onClick = {this.revert}>Revert</button>
				</div>

				<ArticleList articles={this.state.reverted ? articles.reverse() : articles} />
			</div>
		)
	}

	revert = () => {

		console.log("step 1") 
		this.setState({
			reverted: !this.state.reverted
		})
	}
}

export default App