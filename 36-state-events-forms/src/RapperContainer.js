import React, { Component } from 'react'
import Rapper from './Rapper'


class RapperContainer extends Component {

  mapRappers(){
    return this.props.rapperList.map(musicPerson => <Rapper key={musicPerson.name} rapper={musicPerson} />)
  }

  render(){
    return (
      <div id="rapperContainer">
        {this.mapRappers()}
      </div>
    );
  }
}

export default RapperContainer;
