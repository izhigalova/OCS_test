import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import 'css-wipe'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import reducers from './store/reducers'
import helloSaga from './store/sagas'

import PostList from './components/PostList'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(helloSaga)

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/posts" />} />
          <Route exact path="/posts" component={() => <PostList></PostList>} />
          <Route exact path="/posts/:id" component={() => <div>POST</div>} />
        </Switch>
      </Router>
    </App>
  </Provider>,

  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
