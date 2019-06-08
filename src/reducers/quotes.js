import uuid from 'uuid';

export default (state = [], action) => {
  let quote
  let idx
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      quote = state.find(q => q.id === action.quoteId )
      idx = state.indexOf(quote)
      return [
        ...state.slice(0, idx),
        {
          ...quote,
          votes: quote.votes + 1
        },
        ...state.slice(idx + 1)
      ]

case 'DOWNVOTE_QUOTE':
      quote = state.find(q => q.id === action.quoteId )
      if (quote.votes > 0) {
        idx = state.indexOf(quote)
        return [
          ...state.slice(0, idx),
          {
            ...quote,
            votes: quote.votes - 1
          },
          ...state.slice(idx + 1)
        ]
      } else {
        return state
      }

    default:
      return state;
  }
}
