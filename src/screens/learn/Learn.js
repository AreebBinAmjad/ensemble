import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Header, SubjectCard } from '../../components';
import MyStatusBar from '../../components/MyStatusBar';
import { Screen } from '../../constants';
import { Colors } from '../../constants/assets/Colors';
import appStyle from '../../styles/appStyle';
import { verticalScale } from '../../utils/ScaleUtils';
import { DummySubjects } from '../DummyData';

const Learn = ({ navigation }) => {
  const onPressStart = (item) => {
    navigation.navigate(Screen.subjectDetails, { subject: item });
  };

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.theme} barStyle="light-content" />
      <View style={styles.appBar} />
      <View style={styles.content} />
      <View style={styles.headerSection}>
        <Header isChange />
        <View style={[appStyle.aiCenter, { paddingTop: verticalScale(20) }]}>
          <Text style={styles.t12}>ready to learn?</Text>
          <Text style={styles.getStartedText}>click on a class to get started</Text>
        </View>
      </View>
      <View style={{ height: verticalScale(600) }}>
        <ScrollView
          contentContainerStyle={[appStyle.aiCenter, { paddingVertical: verticalScale(10) }]}>
          {DummySubjects.map((item, index) => {
            return (
              <SubjectCard
                key={index}
                onPressStart={() => onPressStart(item)}
                subjectTitle={item.subjectTitle}
                time={item.time}
                subjectCompleteness={item.subjectCompleteness}
                questions={item.questions}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  headerSection: {
    paddingBottom: verticalScale(20),
    backgroundColor: Colors.theme,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  t12: {
    fontSize: verticalScale(12),
    color: Colors.white,
  },
  getStartedText: {
    fontSize: verticalScale(16),
    fontWeight: '600',
    color: Colors.white,
  },
});
