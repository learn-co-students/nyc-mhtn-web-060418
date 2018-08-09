import React from 'react';

const switchClass = (isOn) => "lightswitch" + (isOn ? " on" : "")


export default class extends React.Component  {

  // state = {
  //   id: '5',
  //   isLightOn: false,
  //   name: 'dining room'
  // }

  render(){

    // console.log(this.props)

    const { name, isLightOn } = this.props.room
    // const name = this.props.room.name;
    // const isLightOn = this.props.room.isLightOn;


    // console.log(this.props.whateverTheFunctionNameIs)

    return (
      <React.Fragment>
        <dl className={ switchClass(isLightOn) }>
          <dt>Name: </dt>
          <dd>{ name }</dd>
          <dt>On: </dt>
          <dd>{ isLightOn ? "true" : "false" }</dd>
        </dl>
        <button onClick={ () => this.props.whateverTheFunctionNameIs(this.props.room) }>switch</button>
      </React.Fragment>);
  }
};
