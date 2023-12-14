import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Button, Header, ListTabs, Post } from '../../components';
import MyStatusBar from '../../components/MyStatusBar';
import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import { Keys } from '../../constants/keys/Keys';
import appStyle from '../../styles/appStyle';
import { screenWidth } from '../../styles/screenSize';
import { horizontalScale, verticalScale } from '../../utils/ScaleUtils';
import { DummyPosts, DummyPosts2, DummyPosts3, DummyPosts4 } from '../DummyData';

const ClassesScreen = ({ navigation }) => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [posts, setPosts] = useState(DummyPosts);

  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState([]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'data structures', value: 'data structures' },
    { label: 'linear algebra', value: 'linear algebra' },
    { label: 'us history', value: 'us history' },
    { label: 'negotiation', value: 'negotiation' },
  ]);

  const onPressTabs = (type) => {
    if (Keys.listTab === type) {
      setTab1(true);
      setTab2(false);
    } else {
      setTab2(true);
      setTab1(false);
    }
  };

  const onPressShowMore = (index) => {
    const IndexFound = selectedIndex.includes(index);
    if (IndexFound) {
      const newArray = selectedIndex.filter((i) => i !== index);
      setSelectedIndex(newArray);
    } else {
      setSelectedIndex([...selectedIndex, index]);
    }
  };

  const onPressHeart = (post) => {
    if (likedPosts.length === 0) {
      setLikedPosts([...likedPosts, post]);
    } else {
      const isAlreadyPresent = likedPosts.includes(post);
      if (!isAlreadyPresent) {
        setLikedPosts([...likedPosts, post]);
      } else {
        const newArray = likedPosts.filter((i, index) => i.id !== post.id);
        setLikedPosts(newArray);
      }
    }
  };

  const onPressNewPost = () => {
    navigation.navigate('NewPost');
  };

  const onSelectItemHandler = (item) => {
    if (item.value === 'data struction') {
      setPosts(DummyPosts)
    }
    if (item.value === 'linear algebra') {
      setPosts(DummyPosts2)
    }
    if (item.value === 'us history') {
      setPosts(DummyPosts3)
    }
    if (item.value === 'negotiation') {
      setPosts(DummyPosts4)
    }
  }

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.backgroundGray} barStyle="dark-content" />
      <View style={styles.headerSection}>
        <Header />
        <View style={[appStyle.aiCenter]}>
          <Text style={styles.t12}>select your class</Text>
          <View style={{ width: screenWidth.width45 }}>
            <DropDownPicker
              style={{ borderColor: Colors.lightMidGray }}
              labelStyle={{ color: Colors.lightPink }}
              dropDownContainerStyle={{ borderColor: Colors.lightMidGray, color: Colors.lightPink }}
              tickIconStyle={styles.tickIcon}
              listItemLabelStyle={{ color: Colors.lightPink }}
              placeholder="data structures"
              placeholderStyle={styles.dropdownText}
              ArrowDownIconComponent={({ style }) => (
                <Image style={styles.downArrow} source={Icons.ic_down_arrow} />
              )}
              ArrowUpIconComponent={({ style }) => (
                <Image style={styles.downArrow} source={Icons.ic_arrow_up} />
              )}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              onSelectItem={(item) => onSelectItemHandler(item)}
            />
          </View>
        </View>
      </View>
      <View style={[appStyle.row, { zIndex: -2 }]}>
        <ListTabs isActive={tab1} onPress={() => onPressTabs(Keys.listTab)} icon={Icons.ic_list} />
        <ListTabs
          isActive={tab2}
          onPress={() => onPressTabs(Keys.favoriteTab)}
          icon={Icons.ic_heart}
        />
      </View>
      {tab1 && (
        <View style={{ height: verticalScale(450), zIndex: -2 }}>
          <ScrollView>
            {posts.map((item, index) => {
              const IndexFound = selectedIndex.find((i) => i === index);
              const found = likedPosts.find((i, index) => i.id === item.id);
              return (
                <Post
                  key={index}
                  onPressHeart={() => onPressHeart(item)}
                  userImage={item.userImage}
                  userName={item.userName}
                  time={item.time}
                  postTitle={item.postTitle}
                  postDescription={item.postDescription}
                  likes={item.likes}
                  comments={item.comments}
                  projectNumber={item.projectNumber}
                  onPressShowMore={() => onPressShowMore(index)}
                  onPressShowLess={() => onPressShowMore(index)}
                  showMore={IndexFound === index}
                  isLiked={found && found}
                />
              );
            })}
          </ScrollView>
        </View>
      )}
      {tab2 && (
        <View style={{ height: verticalScale(450), zIndex: -2 }}>
          <ScrollView>
            {likedPosts.map((item, index) => {
              const IndexFound = selectedIndex.find((i) => i === index);
              return (
                <Post
                  key={index}
                  onPressHeart={() => onPressHeart(item)}
                  userImage={item.userImage}
                  userName={item.userName}
                  time={item.time}
                  postTitle={item.postTitle}
                  postDescription={item.postDescription}
                  likes={item.likes}
                  comments={item.comments}
                  projectNumber={item.projectNumber}
                  onPressShowMore={() => onPressShowMore(index)}
                  onPressShowLess={() => onPressShowMore(index)}
                  showMore={IndexFound === index}
                  isLiked
                />
              );
            })}
          </ScrollView>
        </View>
      )}
      <View style={[appStyle.aiCenter, appStyle.pt10]}>
        <Button
          onPress={onPressNewPost}
          label="new post"
          labelStyle={styles.buttonLabelStyle}
          leftIcon={Icons.ic_edit}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

export default ClassesScreen;

const styles = StyleSheet.create({
  headerSection: {
    paddingBottom: verticalScale(15),
  },
  t12: {
    fontSize: verticalScale(12),
    paddingTop: verticalScale(25),
    paddingBottom: verticalScale(8),
  },
  dropdown: {
    width: horizontalScale(172),
    height: verticalScale(36),
    borderWidth: 1,
    borderColor: Colors.lightMidGray,
    borderRadius: 8,
    backgroundColor: Colors.white,
    ...appStyle.rowBtw,
    paddingHorizontal: horizontalScale(20),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  dropdownText: {
    fontSize: verticalScale(16),
    color: Colors.lightPink,
  },
  downArrow: {
    width: verticalScale(15),
    height: verticalScale(15),
    resizeMode: 'contain',
    tintColor: Colors.lightPink,
  },
  buttonStyle: {
    width: horizontalScale(155),
    height: verticalScale(36),
  },
  buttonLabelStyle: {
    paddingLeft: 20,
  },
  tickIcon: {
    tintColor: Colors.lightPink,
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});
