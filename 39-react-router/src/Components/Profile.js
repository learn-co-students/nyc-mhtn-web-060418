import React, { Fragment } from 'react';

const Profile = ({ name, avatar, description }) => {
  return (
    <Fragment>
      <h2>{name}</h2>
      <img src={require(`../assets/png/${avatar}`)} alt={name} />
      <p>{description}</p>
    </Fragment>
  );
}

export default Profile;
