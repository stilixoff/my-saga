import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { useSelector } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

import Counter from './components/Counter'
import reducer from './redux/reducers'
import rootSaga from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  
)

sagaMiddleware.run(rootSaga)

const action = (type, payload = 2000) => store.dispatch({type, payload})

function App() {

  const dataStore = useSelector(store => store)

  return (
      <Counter
        value={dataStore}
        onIncrement={() => action('INCREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
        onDecrement={() => action('DECREMENT')} />
  )
}

export default App;
