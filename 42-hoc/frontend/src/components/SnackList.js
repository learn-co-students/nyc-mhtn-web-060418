import React from 'react';

const SnackList = ({ snacks }) => {
  return (
    <ul className="snacks">
      {snacks.map(snack => <li key={snack.id}>{snack.name}</li>)}
    </ul>
  )
}

export default SnackList;
