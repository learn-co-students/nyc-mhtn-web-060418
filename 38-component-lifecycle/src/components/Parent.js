import React from 'react';
import Child from './Child';


class Parent extends React.Component {

  constructor() {
    super()
    this.whateverComponentName = "Parent"
  }

  componentDidMount() {
    console.log(this.whateverComponentName + " didMount")
  }

  shouldComponentUpdate(nextProps) {
    console.log("next " + nextProps.randomNumber)
    console.log("old " + this.props.randomNumber)
    const delta = Math.abs(nextProps.randomNumber - this.props.randomNumber);
    console.log("difference " + delta);
    return (delta > 10)
  }


  render(){
    console.log(this.whateverComponentName + " render")
    return (<div className="component parent">
        { this.whateverComponentName }
        <span style={ { fontSize: 81, display: "block"} }>{ this.props.randomNumber }</span>
      </div>)
  }

  componentWillUnmount() {
    console.log(this.whateverComponentName + " willUnmount")
  }

}


export default Parent