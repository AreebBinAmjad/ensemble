import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import { horizontalScale, verticalScale } from '../utils/ScaleUtils';

const CheckBox = (props) => {
  const { onPress, isChecked } = props;
  return (
    <TouchableOpacity style={styles.checkBox} onPress={onPress}>
      {isChecked && <Image style={styles.tick} source={Icons.ic_tick} />}
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: verticalScale(22),
    height: verticalScale(22),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.theme,
  },
  tick: {
    width: horizontalScale(15),
    height: verticalScale(15),
    resizeMode: 'contain',
  },
  label: {
    fontSize: verticalScale(12),
  },
});
