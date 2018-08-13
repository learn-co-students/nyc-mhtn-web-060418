import React from 'react';

class CommentForm extends React.Component {
  state = {
    name: '',
    comment: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();

    const { name, comment } = this.state;
    const commentObject = { name, comment };

    this.props.addComment(commentObject, this.props.fact)
  }

  render() {
    return (
      <form className="comment-form" onSubmit={ this.onSubmit }>

        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={this.state.name} onChange={this.onChange} />

        <label htmlFor="comment">Comment</label>
        <textarea name="comment" id="comment" value={this.state.comment} onChange={this.onChange} />

        <input type="submit" />
      </form>
    );
  }
}

export default CommentForm;
