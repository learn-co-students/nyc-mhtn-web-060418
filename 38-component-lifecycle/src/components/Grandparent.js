import React from 'react';
import Parent from './Parent';


class Grandparent extends React.Component {


  state = {

  }

  constructor() {
    super()
    this.whateverComponentName = "Grandparent"
  }

  componentDidMount() {


    setInterval(() => {
      this.setState({
        randomNumber: Math.floor(Math.random() * 100)
      }, () => console.log(this.state))
    }, 1000)


    console.log(this.whateverComponentName + " didMount")
  }

  componentDidUpdate() {
    console.log(this.whateverComponentName + " didUpdate")
  }

  render(){
    console.log(this.whateverComponentName + " render")
    return (<div className="component grandparent" onClick={ () => this.setState({ foo: "bar"}) }>
        { this.whateverComponentName }
         { this.state.foo ? "" : <Parent randomNumber={ this.state.randomNumber } /> }
      </div>)
  }

  componentDidUpdate() {
    console.log(this.whateverComponentName + " didUpdate")
  }

}


export default Grandparent