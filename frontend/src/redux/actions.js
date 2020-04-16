import { ABOUT_INFO_COLLAPSE, ABOUT_CONTACTS_COLLAPSE, NAVBAR_COLLAPSE } from './types'


export function aboutInfo() {
	return {
		type: ABOUT_INFO_COLLAPSE
	}
}
export function aboutContacts() {
	return {
		type: ABOUT_CONTACTS_COLLAPSE
	}
}
export function navBarCollapse() {
	return {
		type: NAVBAR_COLLAPSE
	}
}