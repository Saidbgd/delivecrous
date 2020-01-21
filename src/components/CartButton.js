import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image
} from 'react-native';
import { view } from 'react-easy-state';
import { withNavigation } from 'react-navigation';

import { HorizontalScale, FontSizeScale } from '@helpers/scales';
import Colors from '@helpers/colors';
import Store from '@src/Store';

const CartButton = ({ navigation }) => {
  // useEffect(() => {
  //   console.log(navigation);
  // });

  //
  const goToCartRecap = () => {
    // Store.refreshDishsList();
    navigation.navigate('CartRecap');
  };

  //
  return (
    <TouchableNativeFeedback
      onPress={() => goToCartRecap()}
      background={TouchableNativeFeedback.Ripple()}
      useForeground={true}
    >
      <View style={styles.container}>
        <Image style={styles.icon} source={require('@assets/cart-icon.png')} />
        <Text style={styles.badge}>{Store.cartList.length}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

//
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginRight: HorizontalScale(10),
    borderRadius: FontSizeScale(30),
    width: HorizontalScale(60),
    alignItems: 'center'
  },
  icon: {
    width: HorizontalScale(30),
    resizeMode: 'contain'
  },
  badge: {
    position: 'absolute',
    right: 3,
    top: 10,
    width: HorizontalScale(21),
    textAlign: 'center',
    backgroundColor: Colors.Cinnabar,
    color: Colors.OldLace,
    borderRadius: FontSizeScale(10),
    fontSize: FontSizeScale(15),
    lineHeight: FontSizeScale(18)
  }
});

//
export default withNavigation(view(CartButton));
