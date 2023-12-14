import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Header, SubjectTopicCard } from '../../components';
import MyStatusBar from '../../components/MyStatusBar';
import { Screen } from '../../constants';
import { Colors } from '../../constants/assets/Colors';
import appStyle from '../../styles/appStyle';
import { horizontalScale, verticalScale } from '../../utils/ScaleUtils';
import { DummySubjectsTopics } from '../DummyData';

const SubjectDetails = ({ route, navigation }) => {
  const { subject } = route.params;

  const onPressSubject = () => {
    navigation.navigate(Screen.topicDetails, { subject });
  };

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.theme} barStyle="light-content" />
      <View style={styles.headerSection}>
        <Header isChange />
        <View style={styles.headerBottomSection}>
          <Text style={styles.subjectTitle}>{subject && subject.subjectTitle}</Text>
          <View>
            <Text style={styles.headerRightText}>
              Questions: <Text style={styles.values}>{subject && subject.questions}</Text>
            </Text>
            <Text style={styles.headerRightText}>
              Complete: <Text style={styles.values}>{subject && subject.subjectCompleteness}</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={{ height: verticalScale(567) }}>
        <ScrollView contentContainerStyle={[appStyle.aiCenter, appStyle.pv10]}>
          {DummySubjectsTopics.map((item, index) => {
            return (
              <SubjectTopicCard
                key={index}
                onPress={onPressSubject}
                topicTitle={item.topicTitle}
                topicDescription={item.topicDescription}
                likes={item.likes}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SubjectDetails;

const styles = StyleSheet.create({
  headerSection: {
    paddingBottom: verticalScale(20),
    backgroundColor: Colors.theme,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: verticalScale(155),
    justifyContent: 'space-between',
  },
  headerBottomSection: {
    ...appStyle.row,
    ...appStyle.jcSpaceBetween,
    ...appStyle.aiFlexEnd,
    paddingHorizontal: horizontalScale(20),
  },
  subjectTitle: {
    fontSize: verticalScale(20),
    fontWeight: '800',
    color: Colors.white,
  },
  headerRightText: {
    fontSize: verticalScale(14),
    fontWeight: '800',
    color: Colors.white,
  },
  values: {
    color: Colors.yellow,
    fontSize: verticalScale(14),
  },
});
