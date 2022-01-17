import React from 'react'

import initialEmails from './data/emails'

export const StoreContext = React.createContext()

export class StoreActions {
  static hideRead = 'Hide Read'
  static setTab = 'Set Tab'
  static doSearch = 'Do Search'
  static updateEmail = 'Update Emails'
  //STORES THE VARIOUS ACTIONS AVAILABLE TO THE USER LIKE CONSTANTS
  //YOU CAN'T USE CONST
  //THEY BECOME THE TYPES FOR THE REDUCERS
}

export class StoreTabs {
  static inbox = 'Inbox'
  static starred = 'Starred'
  //STORES THE TWO CHOICES FOR TABS LIKE CONSTANTS
  //YOU CAN'T USE CONST
  //THEY BECOME THE TYPES FOR THE REDUCERS
}

const hideReadReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.hideRead: //INSTEAD OF USING A STRING, IT USES THE ALREADY STORED DATA
      const hideState = action.payload
      return hideState
    default:
      return state
  }
}

const tabReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.setTab:
      const tabState = action.payload
      return tabState
    default:
      return state
  }
}

const searchReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.doSearch:
      const searchTerm = action.payload
      return searchTerm
    default:
      return state
  }
}

const emailsReducer = (state, action) => {
  switch (action.type) {
    case StoreActions.updateEmail:
      const updatedState = state.map(email => {
        if (email.id === action.payload.id) {
          return action.payload
        } else {
          return email
        }
      })
      return updatedState
    default:
      return state
  }
}

export const initialState = {
  hideRead: false,
  currentTab: StoreTabs.inbox,
  searchTerm: '',
  emails: initialEmails
}

const combineReducers = reducers => {
  return (state = {}, action) => {
    const newState = {}
    for (let key in reducers) {
      newState[key] = reducers[key](state[key], action)
    }
    return newState
  }
}

export const rootReducer = combineReducers({
  hideRead: hideReadReducer,
  currentTab: tabReducer,
  searchTerm: searchReducer,
  emails: emailsReducer
  //COMBINES THE STATE AND THE REDUCER
})
