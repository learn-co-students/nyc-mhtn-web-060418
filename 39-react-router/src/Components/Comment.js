import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>{this.props.name}</h3>
        <p>{this.props.comment}</p>
      </React.Fragment>
    );
  }
}

export default Comment;
