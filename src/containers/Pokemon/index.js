import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";


import { scale } from "utils/scale";

//components
import { ScreensHeader } from "components/Headers";

//
import { Container, Icon, Spinner, Button, Text, Toast, Picker, Form} from 'native-base';

//actions
import * as pokemonActions from '@reducers/pokemon/pokemonActions'
import { List } from "components/Pokemon"

/*
 *  Save that state
 */
function mapStateToProps (state) {
  return {
    pokemon: state.pokemon
  }
}


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({...pokemonActions}, dispatch)
  }
}


const LIMIT = 25;
const PAGE = 1;
const DEFAULT_OPTION = "Default";
const UPGRADE_OPTION = "Upgrade";
const IMPOSTERS_OPTION = "Imposters";
const ULTIMATE_OPTION = "Ultimate";


const PokemonListScreen = (props) => {

    const {navigation, pokemon, actions} = props;
    const [pokemonList, setPokemon] = useState([]);
    const [clientData, setClientData] = useState([]);


    const [limit] = useState(LIMIT);
    const [page, setPage] = useState(PAGE);
    const [loadmore, setLoadmore] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [pending_process, setPending_process] = useState(true);


    //selector
    const [option, setOption] = useState(DEFAULT_OPTION);


    useEffect(() => {
        if(pokemon.form.isFetching){
           actions.getAllPokemon("?limit=" + page * LIMIT, "");
        }
    },[]);


    useEffect(() => {
        console.log('load more with page', page);
        if (pokemon.form.fields.data.length == limit || page == 1) {
          setPending_process(true);
          actions.getAllPokemon("?limit=" + page * limit, "")
        }
      }, [page]);


    useEffect(() => {
     if(pokemon.form.fields.data !== null) {
         if (pokemon.form.fields.data.length > 0) {
            setRefresh(false);
            setClientData(pokemon.form.fields.data);
            setLoadmore(pokemon.form.fields.data.length == limit ? true : false);
            setPending_process(false);
         } else {
            setLoadmore(false);
         }
      }
     }, [pokemon.form.fields.data]);




    const handleLoadMore = () => {
        if (loadmore && !pending_process) {
          setPage(page + 1);
        }
     };

    const onRefresh = () => {
          actions.getAllPokemon("?limit=" + PAGE * limit, "");
          setOption(DEFAULT_OPTION);
    };


    const renderFooter = () => {
      return  pokemon.form.isFetching ? <View><Text>Loading...</Text></View> : null
    }

    const onValueChange = (val) => {

        setOption(val);

        switch(val){
                  case DEFAULT_OPTION:
                        onRefresh();
                  break;

                  case UPGRADE_OPTION:
                        concatUpgraded(pokemon.form.fields.data.length);
                  break;

                  case IMPOSTERS_OPTION:
                        actions.getAllPokemon("?limit=" + pokemon.form.fields.count, "a")
                  break;

                  case ULTIMATE_OPTION:
                        concatUpgraded(20);
                  break;

        }


    }

    const concatUpgraded = (total) => {
      var tempData = [];

          pokemon.form.fields.data.slice(0, total).map((item,index) => {
              tempData.push({
                "name": UPGRADE_OPTION + " " + item.name,
                "url": item.url
              });
          });
          setClientData(tempData);

    }


    return (
        <Container>
            <ScreensHeader
              navigation={props.navigation}
              headerName={"Pokemon - " + option}
            />

            <View>
            <Form>
                <Picker
                   mode="dropdown"
                   iosHeader="Select your option"
                   iosIcon={<Icon name="arrow-down" />}
                   style={{ width: undefined }}
                   selectedValue={option}
                   onValueChange={onValueChange}
                 >
                   <Picker.Item label={DEFAULT_OPTION} value={DEFAULT_OPTION} />
                   <Picker.Item label={UPGRADE_OPTION} value={UPGRADE_OPTION} />
                   <Picker.Item label={IMPOSTERS_OPTION} value={IMPOSTERS_OPTION} />
                   <Picker.Item label={ULTIMATE_OPTION} value={ULTIMATE_OPTION} />
                 </Picker>
                 </Form>
            </View>

            <List
              data = {clientData}
              refreshing={pokemon.form.isFetching}
              ListFooterComponent={renderFooter}
              onEndReached={handleLoadMore}
              onRefresh={() => onRefresh()}
              onEndReachedThreshold={10}
              scrollEventThrottle={150}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: scale(10),
    marginBottom:scale(50)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListScreen);
