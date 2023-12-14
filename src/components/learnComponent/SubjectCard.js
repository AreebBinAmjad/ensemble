import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenWidth } from '../../styles/screenSize';
import { horizontalScale, verticalScale } from '../../utils/ScaleUtils';
import Button from '../Button';

const SubjectCard = (props) => {
  const { time, subjectTitle, onPressStart, subjectCompleteness, questions } = props;

  return (
    <View style={styles.cardMain}>
      <View style={appStyle.rowBtw}>
        <Text style={styles.time}>{time}</Text>
        <TouchableOpacity>
          <Image style={styles.dotsMenu} source={Icons.ic_dots_menu} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.subjectTitle}>{subjectTitle}</Text>
        <View style={[appStyle.rowBtw, appStyle.aiFlexEnd]}>
          <Button
            onPress={onPressStart}
            label="start"
            buttonStyle={styles.buttonStyle}
            labelStyle={styles.buttonLabelStyle}
          />
          <View style={appStyle.aiFlexEnd}>
            <Text style={styles.completedPercentage}>{subjectCompleteness}</Text>
            <Text style={styles.questions}>{questions + ' ' + 'questions'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  cardMain: {
    width: horizontalScale(362),
    height: verticalScale(128),
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingLeft: horizontalScale(30),
    paddingRight: horizontalScale(10),
    paddingVertical: verticalScale(15),
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  time: {
    fontSize: verticalScale(12),
    color: Colors.midGray,
    top: verticalScale(-10),
  },
  dotsMenu: {
    width: verticalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
  },
  subjectTitle: {
    fontSize: verticalScale(16),
    fontWeight: '600',
    color: Colors.black,
    marginBottom: verticalScale(15),
  },
  buttonStyle: {
    width: horizontalScale(83),
    height: verticalScale(25),
    borderRadius: 10,
  },
  buttonLabelStyle: {
    fontSize: verticalScale(12),
    fontWeight: '600',
  },
  completedPercentage: {
    fontSize: verticalScale(12),
    fontWeight: '700',
    color: Colors.lightGreen,
  },
  questions: {
    fontSize: verticalScale(10),
    fontWeight: '700',
    color: Colors.black,
  },
});
