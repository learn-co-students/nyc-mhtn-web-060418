import React from 'react';


class Child extends React.Component {

  state = {
    dogPic: ""
  }

  constructor() {
    super()
    this.whateverComponentName = "Child"
  }

  componentDidMount() {
    this.fetchTheDog()

    this.intervalId = setInterval(this.fetchTheDog, 5000);

    console.log(this.whateverComponentName + " didMount")
  }

  fetchTheDog = () => {
    console.log("hello this is happening")
    fetch("https://dog.ceo/api/breeds/image/random" )
      .then(res => res.json())
      .then(json => {
        this.setState({dogPic: json.message })
      })
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
    console.log(this.whateverComponentName + " willUnmount")
  }

  render(){
    console.log(this.whateverComponentName + " render")
    return (<div className="component child">
      { this.whateverComponentName }
      <img src={ this.state.dogPic} />
    </div>)
  }


}


export default Child