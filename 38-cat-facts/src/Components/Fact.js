import React from 'react';
import Comments from './Comments'
import CommentForm from './CommentForm'
import ReactionButtons from './ReactionButtons'


function Fact(props) {
    return (<React.Fragment>
      <h2>{ props.fact.fact }</h2>
      <Comments />
      <CommentForm fact={ props.fact } addComment={ props.addComment } />
      <ReactionButtons />
    </React.Fragment>);
}

export default Fact;
