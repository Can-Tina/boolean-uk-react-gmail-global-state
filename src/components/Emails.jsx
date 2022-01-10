import { useContext } from 'react'

import { StoreContext, StoreTabs } from '../store'

import Email from './Email'

//import '../styles/emails.css'

const Emails = () => {
  const store = useContext(StoreContext)

  let emails = store.state.emails
  console.log(store.state)
  if (store.state.hideRead) {
    emails = emails.filter(email => !email.read)
  }

  if (store.state.currentTab === StoreTabs.starred) {
    emails = emails.filter(email => email.starred)
  }

  if (store.state.searchTerm !== '') {
    emails = emails.filter(email =>
      email.title.toLowerCase().includes(store.state.searchTerm.toLowerCase())
    )
  }

  return (
    <main className="emails">
      <ul>
        {emails.map(email => (
          <Email key={email.id} email={email} />
        ))}
      </ul>
    </main>
  )
}

export default Emails