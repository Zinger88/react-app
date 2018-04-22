import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: props.defaultOpen,
			count: 0

		}

		this.handleClick = handleClick.bind(this)
	}

	componentWillMount() {
		console.log("mounting")
	}

	componentWillReceiveProps(nextProps) {
		console.log("---", "will receive props")
		if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
			isOpen: nextProps.defaultOpen
		})
	}

	componentWillUpdate() {
		console.log("---", "will update")
	}
/*
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.isOpen !== nextState.isOpen
	}
*/
	render() {
		const {article} = this.props
		
		const body = this.state.isOpen && <section className="card-text">{article.text}</section>
		
		return(
			<div className="card mx-auto" style={{width: '50%'}}>
				<div className="card-header">
					<h3 className="title" onClick = {this.incrementCounter}>
						{article.title}
						clicked {this.state.count}
						<button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
							<b>{this.state.isOpen ? "close" : "open"}</b>
						</button>
					</h3>
				</div>
				<div className="card-body">
					<h6 className="card-subtitle text-muted">created by: <b>{(new Date(article.date)).toDateString()} </b></h6>
					<div>{body}</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		console.log("didMount")
	}

	incrementCounter = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
}




function handleClick() {
	console.log("---", "clicked")
	this.setState({
		isOpen: !this.state.isOpen
	})
}


export default Article