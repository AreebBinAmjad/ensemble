import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import appStyle from '../styles/appStyle';
import { horizontalScale, moderateScale, verticalScale } from '../utils/ScaleUtils';

const ClassesCards = (props) => {
  const { course, days, timing } = props;
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.boxMain}>
      <Text numberOfLines={1} style={styles.subjectTitle}>
        {course}
      </Text>
      <View style={styles.dayTimeSection}>
        <Text style={styles.days}>{days}</Text>
        <View style={styles.centerLine} />
        <Text style={styles.days}>{timing}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClassesCards;

const styles = StyleSheet.create({
  //box style
  boxMain: {
    width: horizontalScale(164),
    height: verticalScale(80),
    backgroundColor: Colors.white,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(15),
  },
  subjectTitle: {
    fontSize: moderateScale(16),
    color: Colors.black,
  },
  days: {
    fontSize: moderateScale(10),
    color: Colors.themeDull,
    fontWeight: '600',
  },
  centerLine: {
    borderLeftWidth: 1.5,
    borderColor: Colors.themeDull,
    height: verticalScale(15),
    marginHorizontal: horizontalScale(5),
  },
  dayTimeSection: {
    ...appStyle.rowCenter,
    backgroundColor: Colors.softPink,
    width: verticalScale(127),
    paddingVertical: verticalScale(3),
    borderRadius: 50,
    marginTop: verticalScale(10),
  },
});
