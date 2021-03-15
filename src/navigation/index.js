// React Modules
import React from "react";

// Third party libraries
import { connect } from "react-redux";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Containers
import PokemonListScreen from "containers/Pokemon"

import { navigationOption, horizontalAnimation } from "./configurations";


const Stack = createStackNavigator();

const RootNavigator = ({ ...props }) => {

  return (
    <Stack.Navigator headerMode="none" screenOptions={horizontalAnimation}
      initialRouteName="PokemonListScreen">

      <Stack.Screen
        name="PokemonListScreen"
        component={PokemonListScreen}
      />

    </Stack.Navigator>
  );
};
//if you need to add pros add here
export default connect(null, null)(RootNavigator);
