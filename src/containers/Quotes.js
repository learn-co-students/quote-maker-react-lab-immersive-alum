import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { bindActionCreators } from 'redux'
import {removeQuote, upvoteQuote, downvoteQuote} from '../actions/quotes'

class Quotes extends Component {
  handleDelete = (id) => {
    this.props.removeQuote(id)
  }

  handleUpvote = (id) => {
    this.props.upvoteQuote(id)
  }

  handleDownvote = (id) => {
    this.props.downvoteQuote(id)
  }

  render() {
    const quoteList = this.props.quotes.map(quote => <QuoteCard quote={quote} 
      handleDelete={this.handleDelete} 
      handleUpvote={this.handleUpvote}
      handleDownvote={this.handleDownvote}
      />)
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
              {/* 
                TODO: 

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
              {quoteList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upvoteQuote: upvoteQuote,
    downvoteQuote: downvoteQuote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes); 