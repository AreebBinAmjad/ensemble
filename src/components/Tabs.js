import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { horizontalScale, verticalScale } from '../utils/ScaleUtils';

const Tabs = (props) => {
  const { focused, icon, label } = props;
  return (
    <View
      style={{
        backgroundColor: focused ? Colors.lightGray : Colors.white,
        ...styles.tabs,
      }}>
      <Image
        style={{
          tintColor: focused ? Colors.activeTabs : Colors.inactiveTabs,
          ...styles.tabIcon,
        }}
        source={icon}
      />
      <Text
        style={{
          color: focused ? Colors.activeTabs : Colors.inactiveTabs,
          ...styles.label,
        }}>
        {label && label}
      </Text>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabs: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: horizontalScale(90),
    height: verticalScale(45),
    borderRadius: 30,
  },
  tabIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  label: {
    fontSize: verticalScale(12),
  },
});
