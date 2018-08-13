import React from 'react';
import Comment from './Comment'

class Comments extends React.Component {
  render() {
    return (<ol>
      <Comment />
    </ol>);
  }
}

export default Comments;
