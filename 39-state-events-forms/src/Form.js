import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: "",
    sadImage: "",
    happyImage: "",
    rating: 0,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

 testFunction = () => {
   return this.props.onSubmit(this.state)
 }

 submitHandler = (e) => {
   this.props.onSubmit(e, this.state)
   this.setState({
     name: "",
     sadImage: "",
     happyImage: "",
     rating: 0,
   })
 }

  render(){
    return(
      <form id="rapperForm" onSubmit={this.submitHandler}>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
         />
        <input
          type="text"
          id="sadImage"
          value={this.state.sadImage}
          onChange={this.handleChange}
         />
        <input
          type="text"
          id="happyImage"
          value={this.state.happyImage}
          onChange={this.handleChange}
         />
         <button
           value="Submit"
           >Button</button>
      </form>
    )
  }
}

export default Form;
