import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from 'react-native';
import { withNavigation } from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { HorizontalScale, FontSizeScale } from '@helpers/scales';
import Colors from '@helpers/colors';
import Store from '@src/Store';

const Dish = ({ id, title, price, description, image, navigation }) => {
  //
  const updateCart = () => {
    if (Store.existInCart(id)) Store.removeFromCart(id);
    else Store.addToCart(id);
  };

  //
  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('ItemDetails', { dishID: id })}
      background={TouchableNativeFeedback.Ripple()}
      useForeground={true}
      delayPressIn={1}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
          <Text style={styles.price}>{price} &euro;</Text>
        </View>
        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
          {description}
        </Text>
        <CheckBox
          style={styles.checkBox}
          onClick={() => updateCart()}
          isChecked={Store.existInCart(id)}
          checkBoxColor={Colors.Cinnabar}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

//
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.OldLace,
    width: HorizontalScale(183),
    height: 300,
    borderRadius: FontSizeScale(5),
    marginBottom: 24,
    backgroundColor: Colors.White,
    elevation: 1,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 207,
    marginBottom: 6
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: HorizontalScale(10),
    marginBottom: 13
  },
  title: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(15),
    lineHeight: FontSizeScale(18),
    color: Colors.Gondola,
    width: HorizontalScale(120)
  },
  price: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(15),
    lineHeight: FontSizeScale(18),
    color: Colors.Buccaneer
  },
  description: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(10),
    lineHeight: FontSizeScale(12),
    color: Colors.Gondola,
    marginLeft: HorizontalScale(10),
    marginRight: HorizontalScale(45),
    marginBottom: 0
  },
  checkBox: {
    position: 'absolute',
    right: HorizontalScale(10),
    bottom: 0,
    padding: 10,
    marginBottom: -3,
    marginRight: -10
  }
});

//
Dish.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired
};

//
export default withNavigation(Dish);
