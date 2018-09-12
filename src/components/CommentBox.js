import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handlChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //action creator
    this.props.saveComment(this.state.comment);
    this.setState({ comment: ''});
  }

  render() {
    return (
      <div className='parent'>
        <div className='title-container'>
          <div className='title'>
              <h1>WikiBox!</h1>
          </div>
        </div>
        <div className="form-container">
          <div className='header'>
            <form onSubmit={this.handleSubmit} className='subscribe'>
              <h4 className='form-header'>Add a Comment</h4>
              <textarea rows="4" cols="50" className='social' onChange={this.handlChange} value={this.state.comment} />
              <div>
                <button className="submit-button"> Submit Comment </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(CommentBox);
