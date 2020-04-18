import  { combineReducers} from 'redux'
import  { createMultilanguageReducer } from "redux-multilanguage";

import  { NAVBAR_COLLAPSE,
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


function navBarReducer(state = true, action) {
	if (action.type === NAVBAR_COLLAPSE) {
		return !state
	}	
	return state	
}

export const rootReducer = combineReducers({
  aboutInfo: aboutInfoReducer,
  aboutContacts: aboutContactsReducer,
  navBarCollapse: navBarReducer,
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" })

})