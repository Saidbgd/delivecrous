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

const DishHorizontal = ({
  id,
  title,
  price,
  description,
  image,
  navigation
}) => {
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
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {title}
            </Text>
            <Text style={styles.price}>{price} &euro;</Text>
          </View>
          <Text
            style={styles.description}
            numberOfLines={4}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
          <CheckBox
            style={styles.checkBox}
            onClick={() => updateCart()}
            isChecked={Store.existInCart(id)}
            checkBoxColor={Colors.Buccaneer}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

//
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: Colors.White,
    borderColor: Colors.OldLace,
    width: '100%',
    height: 110,
    borderRadius: FontSizeScale(3),
    marginBottom: 30,
    elevation: 1,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    paddingHorizontal: HorizontalScale(10),
    paddingVertical: 8
  },
  image: {
    width: HorizontalScale(96),
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18
  },
  title: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(15),
    lineHeight: FontSizeScale(18),
    color: Colors.Gondola,
    width: HorizontalScale(190)
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
    marginBottom: 10,
    width: HorizontalScale(200)
  },
  checkBox: {
    position: 'absolute',
    right: HorizontalScale(10),
    bottom: 0,
    padding: 10,
    marginRight: -10
  }
});

//
DishHorizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired
};

//
export default withNavigation(DishHorizontal);
