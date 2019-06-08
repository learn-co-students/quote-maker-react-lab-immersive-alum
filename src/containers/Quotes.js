import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {

    const { quotes } = this.props;

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
              {quotes.map(q => <QuoteCard key={q.id} quote={q} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({quotes: state.quotes}))(Quotes);
