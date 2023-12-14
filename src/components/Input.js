import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { horizontalScale, verticalScale } from '../utils/ScaleUtils';

const Input = (props) => {
  const { label, inputStyle, keyboardType, onChangeText, value, placeholder } = props;
  return (
    <View style={{ marginVertical: verticalScale(5) }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputMain}>
        <TextInput
          style={[styles.input, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputMain: {
    borderWidth: 1,
    borderColor: Colors.backgroundGray,
    height: verticalScale(40),
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(15),
  },
  label: {
    fontSize: verticalScale(12),
    lineHeight: verticalScale(20),
    fontWeight: '700',
    marginBottom: verticalScale(5),
  },
});
