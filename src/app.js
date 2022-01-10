//I WAS INCREDIBLY UNHAPPY WITH MY ORIGINAL WORK AND DECIDED TO TAKE MORE INSPIRATION FROM STEVE'S SO I COULD BREAK IT DOWN AND LEARN HOW TO DO IT PROPERLY. 
//I HAVE LEFT COMMENTS TO HOPEFULLY SHOW MY UNDERSTANDING.

import React, { useReducer, useMemo } from 'react' //USEMEMO IS SIMILAR TO USEEFFECT AND WILL ONLY RECOMPUTE WHEN A DEPENDENCY IS CHANGED. CAN ONLY COMPUTE WHILE RENDERING.

import { StoreContext, rootReducer, initialState } from './store'

import Emails from './components/Emails'
import { LeftMenu } from './components/LeftMenu'
import { Header } from './components/Header'

import './styles/app.css'

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState) //ALT TO USESTATE. DISPATCH IS USED IN REDUX

  const store = useMemo(() => {
    return { state: state, dispatch: dispatch }
  }, [state, dispatch]) //WILL RUN WHEN STATE OR DISPATCH ARE CHANGED

  return (

    <StoreContext.Provider value={store}>
      <div className="app">
        <Header />
        <LeftMenu />
        <Emails />
      </div>
    </StoreContext.Provider>
    
  )
}

export default App
