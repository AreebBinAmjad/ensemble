import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { Icons } from '../constants/assets/Icons';
import { Images } from '../constants/assets/Images';
import appStyle from '../styles/appStyle';
import { horizontalScale, verticalScale } from '../utils/ScaleUtils';

const Header = (props) => {
  const { isChange } = props;
  return (
    <View style={styles.container}>
      <View style={[appStyle.row, appStyle.aiCenter]}>
        <TouchableOpacity>
          <Image
            style={[styles.menu, { tintColor: isChange && Colors.white }]}
            source={Icons.menu}
          />
        </TouchableOpacity>
        <Image
          style={[styles.logo, { tintColor: isChange && Colors.white }]}
          source={Images.headerLogo}
        />
      </View>
      <View style={[appStyle.row, appStyle.aiCenter]}>
        <TouchableOpacity>
          <Image
            style={[styles.bell, { tintColor: isChange && Colors.white }]}
            source={Icons.bell}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Image style={styles.profile} source={Images.dummyUser} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? verticalScale(10) : 5,
    ...appStyle.rowBtw,
    paddingHorizontal: horizontalScale(15),
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  menu: {
    width: verticalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  logo: {
    width: horizontalScale(100),
    height: verticalScale(26),
    resizeMode: 'contain',
    marginLeft: horizontalScale(15),
    top: verticalScale(-2),
  },
  bell: {
    width: verticalScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  profileButton: {
    marginLeft: horizontalScale(15),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 16.41,
    elevation: 20,
  },
  profile: {
    width: verticalScale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
    borderRadius: 100,
  },
});
