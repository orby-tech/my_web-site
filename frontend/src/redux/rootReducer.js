import  { combineReducers} from 'redux'
import  { createMultilanguageReducer } from "redux-multilanguage";

import  { NAVBAR_COLLAPSE,
					CHANGE_THEME,
					ABOUT_CONTACTS_COLLAPSE } from './types'

//initial state

function aboutInfo () {
	try  {
		console.log(localStorage.getItem(aboutInfo))
		return localStorage.getItem(aboutInfo)
	} 
	catch {
		return true
	}
}


function aboutInfoReducer(state = false, action) {
	console.log(localStorage.aboutInfo)
	if (action.type === 'ABOUT_INFO_COLLAPSE') {
		localStorage.aboutInfo = !state
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
function changeThemeReducer(state = true, action){
	if (action.type === CHANGE_THEME) {
		return !state
	}
	return state
}

export const rootReducer = combineReducers({
  aboutInfo: aboutInfoReducer,
  aboutContacts: aboutContactsReducer,
  navBarCollapse: navBarReducer,
  theme: changeThemeReducer,
  multilanguage: createMultilanguageReducer({ currentLanguageCode: "en" })

})