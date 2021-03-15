'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
const InitialState = require('./pokemonInitialState').default

const {
  POKEMON,
  ON_FORM_FIELD_CHANGE,
  POKEMON_REQUEST,
  POKEMON_SUCCESS,
  POKEMON_FAILURE,
  CLEAR
} = require('../../constants/Pokemon').default


const initialState = new InitialState()

/**
 * ## pokemonReducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function productReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state)


  switch (action.type) {

    case POKEMON_REQUEST:
        return state.setIn(['form', 'state'], action.type)
         .setIn(['form', 'isFetching'], true)
         .setIn(['form', 'error'], null)
         .setIn(['form', 'fields', 'data'], null)


    case POKEMON_SUCCESS:
        return state.setIn(['form', 'isFetching'], false)
         .setIn(['form', 'fields', 'data'], action.payload.results)
         .setIn(['form', 'fields', 'count'], action.payload.count)


    case POKEMON_FAILURE:
        var form = action.payload
        return state.setIn(['form', 'isFetching'], false)
         .setIn(['form', 'error'], null)
         .setIn(['form', 'fields', 'count'], 0)


    case ON_FORM_FIELD_CHANGE:
        const {field, value} = action.payload

        return state.setIn(['form', 'fields', field], value)
              .setIn(['form', 'error'], null)

   }

  return state
}
