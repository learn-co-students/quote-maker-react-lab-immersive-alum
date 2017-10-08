export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUOTE':
			return state.concat(action.quote)
		case 'REMOVE_QUOTE':
			const removedQuote = state.filter( quote => quote.id !== action.quoteId)
			return removedQuote
		case 'UPVOTE_QUOTE':
			const upquote = state.find(quote => quote.id === action.quoteId)
			upquote.votes += 1
			return state
		case 'DOWNVOTE_QUOTE':
			const downvote = state.find(quote => quote.id === action.quoteId)
			if (downvote.votes !== 0){
				downvote.votes -= 1
				return state
			}
			return state
		default:
			return state
	}
}