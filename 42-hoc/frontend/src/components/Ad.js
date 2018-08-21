import React from 'react'

class Ad extends React.Component {
	state = {
		timeRemaining: 5,
	}

	componentDidMount(){
		this.beef = setInterval(() => {
			this.tick()
		}, 1000)
	}

	tick = () => {
		if (this.state.timeRemaining){
			this.setState({
				timeRemaining: this.state.timeRemaining - 1
			})
		} else {
			clearInterval(this.beef)
		}
	}

	render(){
		// console.log(this.state.timeRemaining)
		const adStyle = {
			position: 'absolute',
			left: this.props.x,
			top: this.props.y,
		};

		return (
			<div style={adStyle}>
				<iframe title="advertisement" height="200px" width="340px" src="https://www.youtube.com/embed/a8XC4H84rMU?autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
				<button onClick={this.props.toggleAd} disabled={this.state.timeRemaining}> { this.state.timeRemaining ? `Go back in ${this.state.timeRemaining} second(s)` : "Go back" }</button>
			</div>
		)
	}
}

Ad.defaultProps = {
	x: 0,
	y: 0,
};

export default Ad;
