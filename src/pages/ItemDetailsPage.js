import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { view } from 'react-easy-state';
import CheckBox from 'react-native-check-box';

import { HorizontalScale, FontSizeScale } from '@helpers/scales';
import Colors from '@helpers/colors';
import Store from '@src/Store';

//
const ItemDetailsPage = ({ navigation }) => {
  //
  const { id, title, price, description, ingredients, image } = Store.singleDish(
    navigation.getParam('dishID')
  );

  //
  const updateCart = () => {
    if (Store.existInCart(id)) Store.removeFromCart(id);
    else Store.addToCart(id);
  };

  //
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.titleSmall}>Ingrédients</Text>
          {ingredients.map((item, index) => (
            <Text key={index} style={styles.descriptionItem}>
              - {item}
            </Text>
          ))}
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{price} &euro;</Text>
          <CheckBox
            style={styles.checkBox}
            onClick={() => updateCart()}
            isChecked={Store.existInCart(id)}
            checkBoxColor={Colors.Cinnabar}
          />
        </View>
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
  image: {
    width: '100%',
    height: 300
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: HorizontalScale(15),
    paddingVertical: 30
  },
  contentContainer: {
    flex: 2
  },
  priceContainer: {
    flex: 1
  },
  title: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(23),
    lineHeight: FontSizeScale(29),
    color: Colors.Gondola,
    marginBottom: 15
  },
  titleSmall: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(19),
    lineHeight: FontSizeScale(23),
    color: Colors.Gondola,
    marginBottom: 15
  },
  description: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(12),
    lineHeight: FontSizeScale(15),
    color: Colors.Gondola,
    marginBottom: 40
  },
  descriptionItem: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(12),
    lineHeight: FontSizeScale(15),
    color: Colors.Gondola
  },
  price: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(18),
    lineHeight: FontSizeScale(22),
    color: Colors.Buccaneer,
    alignSelf: 'flex-end',
    marginBottom: 5
  },
  checkBox: {
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: -10
  }
});

//
export default view(ItemDetailsPage);
