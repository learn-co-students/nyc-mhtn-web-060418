import React, { Component } from 'react';
import '../assets/css/CatProfiles.css';
import Profile from './Profile';
import CatAdapter from '../apis/CatAdapter';

class CatProfiles extends Component {
  state = {
    profiles: [],
  }

  componentDidMount() {
    CatAdapter.getCats()
      .then(res => res.json())
      .then(json => {
        this.setState({
          profiles: json
        });
      });
  }

  renderProfiles() {
    return this.state.profiles.map((profile) => {
      const { id, name, description, avatar } = profile;

      return (
        <li className="cat-profile" key={id}>
          <Profile
            name={name}
            description={description}
            avatar={avatar}
          />
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="cat-profiles">
        { this.renderProfiles() }
      </ul>
    );
  }
}

export default CatProfiles;
