export function rootReducer(state, action) {
	if (action.type === 'infoCollapsing') {
		return !state
	}
	return state
}