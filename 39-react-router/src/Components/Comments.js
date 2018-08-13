import React from 'react';
import Comment from './Comment'

class Comments extends React.Component {
  render() {
    return (
      <ol>
        {this.props.comments.map(comment => <li key={comment.id}><Comment {...comment} /></li>)}
      </ol>
    );
  }
}

export default Comments;
