import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenWidth } from '../../styles/screenSize';
import { horizontalScale, verticalScale } from '../../utils/ScaleUtils';

const Post = (props) => {
  const {
    userImage,
    userName,
    time,
    postTitle,
    postDescription,
    likes,
    comments,
    projectNumber,
    showMore,
    onPressShowMore,
    onPressShowLess,
    isLiked,
    onPressHeart,
  } = props;
  return (
    <View style={styles.postMain}>
      <TouchableOpacity onPress={onPressHeart} style={styles.heart}>
        {isLiked ? (
          <Image style={styles.heartFilledIcon} source={Icons.ic_filled_heart} />
        ) : (
          <Image style={styles.heartIcon} source={Icons.ic_heart} />
        )}
      </TouchableOpacity>
      <View style={[appStyle.rowBtw]}>
        <View style={[appStyle.row]}>
          <Image style={styles.userImage} source={userImage} />
          <View style={{ marginLeft: horizontalScale(10) }}>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.postTime}>{time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerSection}>
        <View style={[appStyle.rowBtw, appStyle.pr5, appStyle.mt10]}>
          <Text style={styles.postQuestion}>{postTitle}</Text>
          {showMore && (
            <TouchableOpacity onPress={onPressShowMore}>
              <Image style={styles.arrowIcon} source={Icons.ic_arrow_up} />
            </TouchableOpacity>
          )}
        </View>
        {showMore && (
          <>
            <View style={styles.postDescriptionMain}>
              <Text style={styles.postDescription}>{postDescription}</Text>
            </View>
            <View style={[appStyle.rowBtw]}>
              <View style={[appStyle.row, appStyle.aiCenter, appStyle.mt10]}>
                <View style={styles.thumbAndChat}>
                  <TouchableOpacity>
                    <Image style={styles.thumbAndChatIcon} source={Icons.ic_like} />
                  </TouchableOpacity>
                  <Text style={styles.thumbAndChatCount}>{likes}</Text>
                </View>
                <View style={styles.thumbAndChat}>
                  <TouchableOpacity>
                    <Image style={styles.thumbAndChatIcon} source={Icons.ic_comment} />
                  </TouchableOpacity>
                  <Text style={styles.thumbAndChatCount}>{comments}</Text>
                </View>
              </View>
              <View style={styles.projectNumber}>
                <Text style={styles.projectNumberText}>#project-{projectNumber}</Text>
              </View>
            </View>
          </>
        )}
      </View>
      {!showMore && (
        <TouchableOpacity onPress={onPressShowLess} style={styles.downArrow}>
          <Image style={styles.arrowIcon} source={Icons.ic_arrow_down} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postMain: {
    marginHorizontal: horizontalScale(10),
    backgroundColor: Colors.white,
    borderRadius: 8,
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  userImage: {
    width: verticalScale(32),
    height: verticalScale(32),
    resizeMode: 'contain',
    borderRadius: 100,
  },
  userName: {
    fontSize: verticalScale(12),
    fontWeight: '700',
    color: Colors.black,
  },
  postTime: {
    fontSize: verticalScale(12),
    fontWeight: '400',
    color: Colors.midGray,
  },
  heart: {
    position: 'absolute',
    right: horizontalScale(20),
    top: verticalScale(15),
    zIndex: 5,
  },
  heartIcon: {
    width: verticalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
    tintColor: Colors.black,
  },
  heartFilledIcon: {
    width: verticalScale(18),
    height: verticalScale(18),
    resizeMode: 'contain',
    tintColor: Colors.theme,
  },
  postQuestion: {
    fontSize: verticalScale(14),
    fontWeight: 'bold',
    color: Colors.black,
    width: horizontalScale(265),
  },
  arrowIcon: {
    width: verticalScale(15),
    height: verticalScale(15),
    resizeMode: 'contain',
  },
  postDescriptionMain: {
    width: horizontalScale(265),
    marginVertical: 5,
  },
  postDescription: {
    fontSize: verticalScale(12),
    color: Colors.black,
  },
  thumbAndChat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(15),
  },
  thumbAndChatIcon: {
    width: verticalScale(14),
    height: verticalScale(14),
    resizeMode: 'contain',
    tintColor: Colors.midGray,
    marginRight: 2,
  },
  thumbAndChatCount: {
    fontSize: verticalScale(14),
    color: Colors.midGray,
  },
  projectNumber: {
    backgroundColor: Colors.softGreen,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(4),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectNumberText: {
    fontSize: verticalScale(12),
    color: Colors.black,
  },
  lowerSection: {
    marginLeft: screenWidth.width10,
  },
  downArrow: {
    position: 'absolute',
    bottom: verticalScale(20),
    right: horizontalScale(20),
    zIndex: 5,
  },
});
