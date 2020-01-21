import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import { DeviceHeight } from '@helpers/scales';
import Colors from '@helpers/colors';

const Overlay = ({ visible }) =>
  visible ? (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={Colors.OldLace}
      />
    </View>
  ) : (
    <></>
  );

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: DeviceHeight - 110 + StatusBar.currentHeight,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    elevation: 1,
    zIndex: 1
  },
  spinner: {
    marginTop: 50
  }
});

//
Overlay.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default Overlay;
