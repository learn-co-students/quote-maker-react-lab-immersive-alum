import uuid from 'uuid'

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      let quote = {
        id: uuid(),
        content: action.quote.content,
        author: action.quote.author,
        upVotes: 0,
        downVotes: 0
      };
      return [...state, quote];
    case "REMOVE_VOTE":
      let newState = state.filter(q => q.id!==action.id);
      return newState
    case "UPVOTE":
      let selectQuote = state.filter(q => q.id===action.id)[0];
      selectQuote.upVotes++;
      newState = state.filter(q => q.id!==action.id);
      return [...newState, selectQuote];
    case "DOWNVOTE":
      selectQuote = state.filter(q => q.id===action.id)[0];
      selectQuote.downVotes++;
      newState = state.filter(q => q.id!==action.id);
      return [...newState, selectQuote];
    default: 
      return state;
  }
}
