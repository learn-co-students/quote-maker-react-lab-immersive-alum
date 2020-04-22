import React from 'react';

const QuoteCard = (props) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {props.quote.content}
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            onClick={() => props.addVote(props.quote.id)}
            type="button"
            className="btn btn-primary"
          >
            Upvote
          </button>
          <button
            onClick={() => props.downVote(props.quote.id)}
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            onClick={() => props.removeVote(props.quote.id)}
            type="button"
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {props.quote.upVotes-props.quote.downVotes}
      </div>
    </div>
  </div>;

export default QuoteCard;
