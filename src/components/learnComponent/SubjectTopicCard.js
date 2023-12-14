import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { horizontalScale, verticalScale } from '../../utils/ScaleUtils';

const SubjectTopicCard = (props) => {
  const { topicTitle, topicDescription, likes, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.cardMain}>
      <Text style={styles.cardTitle}>{topicTitle}</Text>
      <Text numberOfLines={4} style={styles.cardDescription}>
        {topicDescription}
      </Text>
      <View style={[appStyle.rowBtw]}>
        <View style={styles.thumb}>
          <TouchableOpacity>
            <Image style={styles.thumbIcon} source={Icons.ic_like} />
          </TouchableOpacity>
          <Text style={styles.likes}>{likes}</Text>
        </View>
        <Image style={styles.rightArrow} source={Icons.ic_arrow_right} />
      </View>
    </TouchableOpacity>
  );
};

export default SubjectTopicCard;

const styles = StyleSheet.create({
  // cards style here ====
  cardMain: {
    width: horizontalScale(360),
    height: verticalScale(138),
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    marginVertical: verticalScale(10),
  },
  cardTitle: {
    fontSize: verticalScale(15),
    fontWeight: '800',
    color: Colors.black,
  },
  cardDescription: {
    fontSize: verticalScale(12),
    fontWeight: '600',
    color: Colors.black,
    paddingVertical: verticalScale(5),
    width: horizontalScale(265),
    height: verticalScale(72),
  },
  thumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(15),
  },
  thumbIcon: {
    width: verticalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
    tintColor: Colors.midGray,
    marginRight: verticalScale(2),
  },
  likes: {
    fontSize: verticalScale(14),
    color: Colors.midGray,
  },
  rightArrow: {
    width: verticalScale(26),
    height: verticalScale(26),
    resizeMode: 'contain',
    tintColor: Colors.theme,
  },
});
