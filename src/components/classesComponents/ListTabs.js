import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { Colors } from '../../constants/assets/Colors';
import { horizontalScale, verticalScale } from '../../utils/ScaleUtils';

const ListTabs = (props) => {
  const { isActive, onPress, icon } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.tabs, isActive && styles.activeTab]}>
      <Image style={[styles.tabIcon, isActive && styles.activeTabIcon]} source={icon} />
    </TouchableOpacity>
  );
};

export default ListTabs;

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: Colors.white,
    width: horizontalScale(187.5),
    height: verticalScale(56),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.black,
  },
  tabIcon: {
    width: verticalScale(24),
    height: verticalScale(24),
    resizeMode: 'contain',
    tintColor: Colors.inactiveTabs,
  },
  activeTabIcon: {
    tintColor: Colors.black,
  },
});
