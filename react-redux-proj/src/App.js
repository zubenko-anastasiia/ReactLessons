import React from "react"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { createStore, applyMiddleware, compose } from "redux"
import "./App.css"
import reducers from "./store/reducers"
import Main from "./components/Main"

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  )
}

export default App
