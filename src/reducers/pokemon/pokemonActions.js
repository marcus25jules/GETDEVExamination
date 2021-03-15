/**
 * # pokemonActions.js
 *
 */

'use strict'

/**
 * ## Imports
 *
 * The actions supported
 */
 const {
   POKEMON,
   ON_FORM_FIELD_CHANGE,
   POKEMON_REQUEST,
   POKEMON_SUCCESS,
   POKEMON_FAILURE,
   CLEAR
 } = require('../../constants/Pokemon').default


import {api} from "@lib/Api";
import CONSTANT from "@routes/constant"


export function pokemonState () {
  return {
    type: POKEMON
  }
}

export function pokemonRequest () {
  return {
    type: POKEMON_REQUEST
  }
}

export function pokemonSuccess (json) {
  return {
    type: POKEMON_SUCCESS,
    payload: json
  }
}


export function pokemonFailure (error) {
  return {
    type: POKEMON_FAILURE,
    payload: error
  }
}

export function onPokemonFormFieldChange (field, value) {
  return {
    type: ON_FORM_FIELD_CHANGE,
    payload: {field: field, value: value}
  }
}


export function getAllPokemon(url, filterOption = "") {

    return dispatch  => {
        dispatch(pokemonRequest());

        api.get(url, CONSTANT.ALL_POKEMON).then((response) => {
          if (typeof response !== 'undefined') {
            if(response.results.length > 0){
              var payload = [];
                console.log(filterOption);
                if(filterOption !== ""){
                      //filter pokemon with letter a
                      response.results = response.results.filter((res) => res.startsWith(filterOption));
                      console.log(startsWithN);
                }
                dispatch(pokemonSuccess(response));
            }
          }
        }).catch(err => {
            dispatch(pokemonFailure(err));
        });
     }
}
