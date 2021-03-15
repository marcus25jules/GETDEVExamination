/**
 * # configureStore.js

 */
'use strict'

/**
 * ## Imports
 *
 * redux functions
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 *
 */
export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
