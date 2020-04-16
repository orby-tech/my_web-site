import  {combineReducers} from 'redux'
import  { ABOUT_INFO_COLLAPSE, 
					ABOUT_CONTACTS_COLLAPSE } from './types'

//ABOUT BLOCK
function aboutInfoReducer(state = false, action) {
	if (action.type === 'ABOUT_INFO_COLLAPSE') {
		return !state
	}	
	return state	
} 

function aboutContactsReducer(state = false, action) {
	if (action.type === ABOUT_CONTACTS_COLLAPSE) {
		return !state
	}	
	return state	
}

export const rootReducer = combineReducers({
  aboutInfo: aboutInfoReducer,
  aboutContacts: aboutContactsReducer
})