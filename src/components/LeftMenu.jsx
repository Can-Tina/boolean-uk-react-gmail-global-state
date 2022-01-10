import { useContext } from 'react'

import { StoreContext, StoreActions, StoreTabs } from '../store'

//import '../styles/leftMenu.css'

export const LeftMenu = () => {
  const store = useContext(StoreContext)

  const numUnread = store.state.emails.filter(email => !email.read).length
  const numStarred = store.state.emails.filter(email => email.starred).length
  const currentTab = store.state.currentTab

  const handleCurrentTab = tab => {
    store.dispatch({
      type: StoreActions.setTab,
      payload: tab
    })
  }

  const handleHideRead = () => {
    store.dispatch({
      type: StoreActions.hideRead,
      payload: !store.state.hideRead
    })
  }

  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <li
          className={`item ${currentTab === StoreTabs.inbox ? 'active' : ''}`}
          onClick={() => handleCurrentTab(StoreTabs.inbox)}
        >
          <span className="label">Inbox</span>
          <span className="count">{numUnread}</span>
        </li>
        <li
          className={`item ${currentTab === StoreTabs.starred ? 'active' : ''}`}
          onClick={() => handleCurrentTab(StoreTabs.starred)}
        >
          <span className="label">Starred</span>
          <span className="count">{numStarred}</span>
        </li>

        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input
            id="hide-read"
            type="checkbox"
            checked={store.state.hideRead}
            onChange={e => handleHideRead(e.target.checked)}
          />
        </li>
      </ul>
    </nav>
  )
}
