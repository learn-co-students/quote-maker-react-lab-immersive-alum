import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => <QuoteCard 
              quote={quote}
              addVote={this.props.addVote}
              downVote={this.props.downVote}
              removeVote={this.props.removeVote}
              />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({quotes}) => ({quotes})

const mapDispatchToProps = dispatch => {
  return {
    addVote: id => dispatch({type: "UPVOTE", id}),
    downVote: id => dispatch({type: "DOWNVOTE", id}),
    removeVote: id => dispatch({type: "REMOVE_VOTE", id})
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
