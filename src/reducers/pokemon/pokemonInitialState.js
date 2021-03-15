'use strict'
/**
 * ## Import
 */
const {Record} = require('immutable')

const {
    POKEMON,
    ON_FORM_FIELD_CHANGE
} = require('../../constants/Pokemon').default


const Form = Record({
  state: POKEMON,
  error: null,
  isFetching: true,
  fields: new (Record({
    data: [],
    count: 0,
  }))()
})

/**
 * ## InitialState
 * The form is set
 */
var InitialState = Record({
  form: new Form()
})
export default InitialState
