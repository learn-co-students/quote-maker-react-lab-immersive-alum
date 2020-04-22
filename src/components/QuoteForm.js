import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuoteForm extends Component {

  state = {
    content: '',
    author: ''
  }

  handleContentChange = (event) => {
    event.preventDefault();
    this.setState({content: event.target.value});
  }

  handleAuthorChange = (event) => {
    event.preventDefault();
    this.setState({author: event.target.value});
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addQuote(this.state);
    this.setState({content: '', author: ''});
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={event => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        value={this.state.content}
                        onChange={event => this.handleContentChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        onChange={event => this.handleAuthorChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuote: quote => dispatch({type: "ADD_QUOTE", quote})
  }
}

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
