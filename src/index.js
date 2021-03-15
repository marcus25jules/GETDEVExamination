import React from "react";
import { Provider, useSelector } from "react-redux";
import RootScreen from "./containers/Root";


import configureStore from '@lib/configureStore'

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";



import { navigationRef } from "./navigation/navigationGlobalRef"; //optional

//Import State
import PokemonInitialState from '@reducers/pokemon/pokemonInitialState'


function getInitialState() {
  const _initState = {
    pokemon: new PokemonInitialState()
  }
  return _initState
}


const store = configureStore(getInitialState())

const App = () => {

  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

const AppContent = (props) => {

  return (
    <NavigationContainer
      {...props}>
        <RootScreen />
    </NavigationContainer>
  );
};

export default App;
