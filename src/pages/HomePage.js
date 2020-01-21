import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { view } from 'react-easy-state';

import { HorizontalScale, FontSizeScale } from '@helpers/scales';
import Colors from '@helpers/colors';
import Dish from '@components/Dish';
import Store from '@src/Store';

//
const HomePage = () => {
  //
  return (
    <View style={styles.container}>
      <Text style={styles.title}>La carte</Text>
      <ScrollView contentContainerStyle={styles.cardsList}>
        {Store.dishsList.map(({ id, title, price, description, image }) => (
          <Dish
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            checked={Store.existInCart(id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White
  },
  title: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(29),
    lineHeight: FontSizeScale(36),
    height: 60,
    textAlignVertical: 'center',
    paddingHorizontal: HorizontalScale(15)
  },
  cardsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: HorizontalScale(15)
  },
  card: {
    borderWidth: 1,
    borderColor: Colors.OldLace,
    width: HorizontalScale(183),
    borderRadius: FontSizeScale(5),
    overflow: 'hidden'
  },
  dishImage: {
    width: '100%',
    height: 207,
    marginBottom: 6
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: HorizontalScale(10),
    marginBottom: 13
  },
  dishName: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(15),
    lineHeight: FontSizeScale(18),
    color: Colors.Gondola
  },
  dishPrice: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(15),
    lineHeight: FontSizeScale(18),
    color: Colors.Buccaneer
  },
  dishDescription: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(10),
    lineHeight: FontSizeScale(12),
    color: Colors.Gondola,
    marginLeft: HorizontalScale(10),
    marginRight: HorizontalScale(45),
    marginBottom: 10
  },
  checkBox: {
    color: Colors.Cinnabar,
    position: 'absolute',
    right: HorizontalScale(10),
    bottom: 7
  }
});

//
export default view(HomePage);
