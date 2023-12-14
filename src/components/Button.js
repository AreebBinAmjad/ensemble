import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { horizontalScale, moderateScale, verticalScale } from '../utils/ScaleUtils';

const Button = (props) => {
  const { buttonStyle, iconStyle, leftIcon, labelStyle, label, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Image style={[styles.icon, iconStyle]} source={leftIcon} />
      <Text style={[styles.label, labelStyle]}>{label && label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.theme,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(40),
    borderRadius: 50,
  },
  icon: {
    width: horizontalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
    position: 'absolute',
    left: horizontalScale(20),
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: Colors.white,
  },
});
