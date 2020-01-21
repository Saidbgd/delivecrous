import React, { useState, useRef } from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  Alert,
  StyleSheet
} from 'react-native';
import { view } from 'react-easy-state';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-material-textfield';
import validate from 'validate.js';

import { HorizontalScale, FontSizeScale, DeviceHeight } from '@helpers/scales';
import Colors from '@helpers/colors';
import DishHorizontal from '@components/DishHorizontal';
import Overlay from '@components/Overlay';
import Store from '@src/Store';

const CartRecapPage = ({ navigation }) => {
  //
  const street = useRef(null);
  const city = useRef(null);
  const zipCode = useRef(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  //
  const errorMessagesFormat = error => (error === undefined ? '' : error[0]);

  //
  const submit = () => {
    const validator = validate(
      {
        street: street.current.value(),
        city: city.current.value(),
        zipCode: zipCode.current.value()
      },
      {
        street: {
          presence: {
            allowEmpty: false,
            message: '^Ce champ est requis'
          }
        },
        city: {
          presence: {
            allowEmpty: false,
            message: '^Ce champ est requis'
          }
        },
        zipCode: {
          presence: {
            allowEmpty: false,
            message: '^Ce champ est requis'
          }
        }
      }
    );
    if (validator === undefined) {
      if (Store.canAfford()) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          Store.buy();
          navigation.navigate('Success');
        }, 3000);
      } else {
        Alert.alert('Votre solde est insuffisant !!');
      }
    } else {
      setErrors(validator);
    }
  };

  //
  return (
    <>
      <Overlay visible={loading} />
      <ScrollView>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <View style={styles.container}>
            {Store.cartList.length ? (
              <>
                <Text style={styles.title}>Panier</Text>
                {Store.cartList.map(
                  ({ id, title, price, description, image }) => (
                    <DishHorizontal
                      key={id}
                      id={id}
                      title={title}
                      price={price}
                      description={description}
                      image={image}
                      checked={true}
                    />
                  )
                )}
                <View style={styles.total}>
                  <Text style={styles.totalText}>Total</Text>
                  <Text style={styles.totalPrice}>
                    {Store.totalPriceInCart()} &euro;
                  </Text>
                </View>
                <Text style={styles.question}>
                  Où veux-tu te faire livrer ?
                </Text>
                <View style={styles.form}>
                  <View style={styles.textInput}>
                    <TextField
                      label="Rue"
                      fontSize={FontSizeScale(18)}
                      tintColor={Colors.Buccaneer}
                      autoCompleteType="off"
                      autoCorrect={false}
                      error={errorMessagesFormat(errors.street)}
                      ref={street}
                    />
                  </View>
                  <View style={styles.textInputHalf}>
                    <TextField
                      label="Ville"
                      fontSize={FontSizeScale(18)}
                      tintColor={Colors.Buccaneer}
                      autoCompleteType="off"
                      autoCorrect={false}
                      error={errorMessagesFormat(errors.city)}
                      ref={city}
                    />
                  </View>
                  <View style={styles.textInputHalf}>
                    <TextField
                      label="Code postal"
                      fontSize={FontSizeScale(18)}
                      tintColor={Colors.Buccaneer}
                      autoCapitalize="none"
                      keyboardType="phone-pad"
                      autoCompleteType="off"
                      autoCorrect={false}
                      error={errorMessagesFormat(errors.zipCode)}
                      ref={zipCode}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableNativeFeedback
                      onPress={() => submit()}
                      background={TouchableNativeFeedback.Ripple()}
                      delayPressIn={1}
                    >
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Passer commande</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </>
            ) : (
              <Text style={styles.cartEmpty}>Votre panier est vide</Text>
            )}
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: DeviceHeight - 110 + StatusBar.currentHeight,
    backgroundColor: Colors.White,
    paddingHorizontal: HorizontalScale(30)
  },
  title: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(29),
    lineHeight: FontSizeScale(36),
    color: Colors.Black,
    marginVertical: 25
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -10,
    marginBottom: 50
  },
  totalText: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(16),
    lineHeight: FontSizeScale(20),
    color: Colors.Black,
    marginRight: HorizontalScale(25),
    textAlignVertical: 'center'
  },
  totalPrice: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(18),
    lineHeight: FontSizeScale(22),
    color: Colors.Gondola,
    marginRight: HorizontalScale(10)
    // fontWeight: '500'
  },
  question: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(18),
    lineHeight: FontSizeScale(22),
    color: Colors.Black
    // fontWeight: '500'
  },
  form: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    width: '100%'
  },
  textInputHalf: {
    width: HorizontalScale(155)
  },
  buttonContainer: {
    width: '100%',
    marginTop: 90,
    alignItems: 'center',
    zIndex: 5
  },
  button: {
    backgroundColor: Colors.Buccaneer,
    borderRadius: FontSizeScale(3),
    width: HorizontalScale(240),
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  buttonText: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(18),
    lineHeight: FontSizeScale(22),
    color: Colors.White
    // fontWeight: '500'
  },
  cartEmpty: {
    // fontFamily: 'Montserrat',
    fontSize: FontSizeScale(16),
    color: Colors.SlateGray,
    textAlign: 'center',
    marginTop: 30
  }
});

export default view(CartRecapPage);
