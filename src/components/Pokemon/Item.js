
import React from "react";
import PropTypes from "prop-types";
import {StyleSheet, View, Image } from "react-native";
import {Thumbnail, ListItem, Text, Left, Content} from 'native-base';
import { BASE_IMAGE_URL as ImageURL, BASE_URL as baseURL} from "@env";


import CONSTANT from "@routes/constant"

import { StyledText } from "components";

import { scale } from "utils/scale";


function Item({ name, ...others }) {

  var url = others.url;
  const id = (url.replace(baseURL + CONSTANT.ALL_POKEMON, "")).slice(0, -1);

  return (
    <ListItem thumbnail>
              <View style={{flexDirection: "row"}}>
                <StyledText size={24}>
                      {name}
                </StyledText>
                <Thumbnail circle large source={{ uri: ImageURL + id + ".png" }} />
              </View>
    </ListItem>
  );
}

const styles = StyleSheet.create({
   //If you need style here
   item:{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop:scale(5),
        padding:scale(10)
   },
   textLabel:{
      textAlign: 'left',
      fontWeight: 'bold',
      width:'100%'
   },

   categoryLabel:{
        textAlign: 'left',
        fontWeight: 'bold',
   }
});

Item.propTypes = {
  name: PropTypes.string.isRequired
};

export default Item;
