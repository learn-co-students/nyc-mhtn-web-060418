import React, { Fragment } from 'react';

const Profile = (props) => {
  const { name, avatar, description } = props;

  return (
    <Fragment>
      <h2>{name}</h2>
      <img src={require(`../assets/png/${avatar}`)} alt={name} />
      <p>{description}</p>
    </Fragment>
  );
}

export default Profile;
