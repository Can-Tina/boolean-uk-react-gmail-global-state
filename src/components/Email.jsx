import { useContext } from 'react'

import { StoreContext, StoreActions } from '../store'

//import '../styles/email.css'

const Email = ({ email }) => {
  const store = useContext(StoreContext)

  const doDispatch = email => {
    store.dispatch({
      type: StoreActions.updateEmail, //SECTION IN STORE SAYS WHAT TYPE IT IS
      payload: email //THIS JUST SAYS WHAT THE PAYLOAD IS
    })
  }

  const handleToggleRead = () => {
    const thisEmail = { ...email, read: !email.read }
    doDispatch(thisEmail)
  }
  const handleToggleStarred = () => {
    const thisEmail = { ...email, starred: !email.starred }
    doDispatch(thisEmail)
  }

  return (
    <li className={`email ${email.read ? 'read' : 'unread'}`}>
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={email.read}
          onChange={handleToggleRead}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={email.starred}
          onChange={handleToggleStarred}
        />
      </div>
      <div className="sender">{email.sender}</div>
      <div className="title">{email.title}</div>
    </li>
  )
}

export default Email
