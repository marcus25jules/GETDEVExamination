import React from "react";
import PropTypes from "prop-types";

import { StyleSheet, FlatList, View, Text } from "react-native";

import { scale } from "utils/scale";

import ListItem from "./Item";

import {Input, Item, Icon, Spinner} from 'native-base';


function List({ data, onActionPress, ...others }) {



  const Separator = () => (
    <View
      style={[styles.separator]}
    />
  );


  const renderItem = ({ item }) => {
        return(<ListItem {...item} onPress={() => onActionPress(item)}/>)
  }


  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={Separator}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
      {...others}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: scale(5),
  },
  emptyListContainer: {
    paddingTop: scale(15),
  },
  titleText: {
    paddingBottom: scale(15),
    letterSpacing: 1,
  },
  textDescription: {
    paddingTop: scale(30),
  },
  separator: {
    height: 1,
    width: "100%",
  },
});

List.propTypes = {
  data: PropTypes.array,
  onActionPress: PropTypes.func
};

List.defaultProps = {
  data: [],
};

export default (List);
