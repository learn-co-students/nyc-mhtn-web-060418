import React, { Component } from 'react'

class Rapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: this.props.rapper.sadImage
    }
  }

    onClick = (e) => {
      this.setState({
        image: this.props.rapper.happyImage
      })
    }

  render(){
    return (<div >
    <h3>{this.props.rapper.name}</h3>
      <img id="rapper" onClick={this.onClick} src={this.state.image} alt="" />
      </div>
    )
  }
}

export default Rapper;
