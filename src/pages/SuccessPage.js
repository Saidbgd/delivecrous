import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { view } from 'react-easy-state';

import { HorizontalScale, VerticalScale, FontSizeScale } from '@helpers/scales';
import Colors from '@helpers/colors';
import Store from '@src/Store';

const SuccessPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('@assets/order-confirmed.png')}
      />
      <Text style={styles.text1}>Commande envoyée !</Text>
      <Text style={styles.text2}>
        Elle vous attendra à la fin de votre cours !
      </Text>
      <Text style={styles.text3}>
        Solde CROUS restant: {Store.balance} &euro;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: HorizontalScale(45),
    alignItems: 'center'
  },
  image: {
    width: HorizontalScale(309),
    height: 257,
    resizeMode: 'contain',
    marginTop: VerticalScale(80),
    marginBottom: VerticalScale(70)
  },
  text1: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(29),
    lineHeight: FontSizeScale(36),
    color: Colors.Buccaneer,
    marginBottom: VerticalScale(60)
    // fontWeight: '500',
  },
  text2: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(19),
    lineHeight: FontSizeScale(23),
    color: Colors.Gondola,
    textAlign: 'center',
    marginBottom: 15
  },
  text3: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(15),
    lineHeight: FontSizeScale(18),
    color: Colors.SlateGray
  }
});

export default view(SuccessPage);
