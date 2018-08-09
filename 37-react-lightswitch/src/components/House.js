import React from 'react';
import Room from './Room'

export default ({ rooms, switchLightSwitch }) => {

  let roomsJsx = rooms.map(room => <li key={ room.id }><Room room={ room } whateverTheFunctionNameIs={ switchLightSwitch }/></li>)

  return (<ul className="switches">
    { roomsJsx }
  </ul>);
};
