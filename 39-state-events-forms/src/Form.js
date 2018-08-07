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
      <div id="form">
        <h4>Add A Rapper</h4>
        <form id="rapperForm" onSubmit={this.submitHandler}>
          <input
            type="text"
            id="name"
            placeholder="Enter Rapper Name"
            value={this.state.name}
            onChange={this.handleChange}
           />
          <input
            type="text"
            id="sadImage"
            placeholder="Enter sadImage URL"
            value={this.state.sadImage}
            onChange={this.handleChange}
           />
          <input
            type="text"
            id="happyImage"
            placeholder="Enter happyImage URL"
            value={this.state.happyImage}
            onChange={this.handleChange}
           />
           <button
             value="Submit"
             >Button</button>
        </form>
      </div>
    )
  }
}

export default Form;
