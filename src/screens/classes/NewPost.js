import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Switch } from 'react-native-paper';

import { Button, Header } from '../../components';
import MyStatusBar from '../../components/MyStatusBar';
import { Colors } from '../../constants/assets/Colors';
import { Icons } from '../../constants/assets/Icons';
import appStyle from '../../styles/appStyle';
import { screenHeight } from '../../styles/screenSize';
import { horizontalScale, verticalScale } from '../../utils/ScaleUtils';

const NewPost = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(true);
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
  const [isSubmitButtonVisible, setIsSubmitButtonVisible] = React.useState(true);
  const [isOptionActive, setIsOptionActive] = React.useState(false);
  const [newPostOptions, setNewpostOptions] = React.useState([]);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const onToggleSwitch2 = () => {
    setIsSwitchOn2(!isSwitchOn2);
    setIsSubmitButtonVisible(!isSubmitButtonVisible);
  };

  const onPressNext = () => {
    setIsOptionActive(true);
    setIsSubmitButtonVisible(!isSubmitButtonVisible);
    setIsSwitchOn2(false);
  };

  const onPressSubmit = () => {
    navigation.goBack();
  };

  const onPressClose = () => {
    navigation.goBack();
  };

  const onPressAddoptions = () => {
    if (newPostOptions.length < 11) {
      const newOption = { option: '' };
      setNewpostOptions([...newPostOptions, newOption]);
    }
  };

  return (
    <View style={[appStyle.flex1, { backgroundColor: Colors.backgroundGray }]}>
      <MyStatusBar backgroundColor={Colors.backgroundGray} barStyle="dark-content" />
      <View style={styles.headerSection}>
        <Header />
      </View>

      <KeyboardAwareScrollView contentContainerStyle={styles.newPostSheet}>
        <View style={styles.newPostMain}>
          <Text style={styles.newPostText}>New Post</Text>
          <TouchableOpacity onPress={onPressClose} style={styles.crossButton}>
            <Image style={styles.crossIcon} source={Icons.ic_cross} />
          </TouchableOpacity>
        </View>
        {isOptionActive && (
          <>
            <View style={styles.boxMainOptions}>
              {newPostOptions.map((item, index) => {
                return (
                  <View
                    key={index}
                    // onPress={() => onPressOptions(index)}
                    style={styles.optionsMain}>
                    <View style={styles.optionsTag}>
                      <Text style={styles.optionSerials}>
                        {(index + 1 + 9).toString(36).toUpperCase()}
                      </Text>
                    </View>
                    <TextInput
                      autoFocus
                      style={styles.inputOptions}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    // placeholder=""
                    />
                  </View>
                );
              })}
            </View>
            <View>
              <TouchableOpacity onPress={onPressAddoptions} style={styles.addOptionsMain}>
                <Image style={styles.plusIcon} source={Icons.ic_plusCircle} />
                <Text style={styles.addOptions}>Add Option</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {!isOptionActive && (
          <TextInput
            style={styles.input}
            // onChangeText={}
            // value={}
            placeholder="type something"
            multiline
          />
        )}
      </KeyboardAwareScrollView>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.lowerSection}>
          {!isOptionActive && (
            <View style={[appStyle.row, appStyle.aiCenter, appStyle.mb10]}>
              <Switch
                style={styles.switchStyle}
                color={Colors.theme}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
              <Text>Anonymous</Text>
            </View>
          )}
          <View style={[appStyle.rowBtw]}>
            {!isOptionActive && (
              <View style={[appStyle.row, appStyle.aiCenter]}>
                <Switch
                  style={styles.switchStyle}
                  color={Colors.theme}
                  value={isSwitchOn2}
                  onValueChange={onToggleSwitch2}
                />
                <Text>This is an exam resource</Text>
              </View>
            )}

            {isSwitchOn2 && (
              <Button
                onPress={onPressNext}
                label="Next"
                buttonStyle={styles.buttonStyle}
                labelStyle={styles.buttonLabelStyle}
              />
            )}

            {isSubmitButtonVisible && (
              <View style={[appStyle.flex1, appStyle.aiFlexEnd]}>
                <Button
                  onPress={onPressSubmit}
                  label="Submit"
                  buttonStyle={styles.buttonStyle}
                  labelStyle={styles.buttonLabelStyle}
                />
              </View>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  mainContainer: {
    height: verticalScale(800),
  },
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
    width: horizontalScale(68),
    height: verticalScale(25),
    borderRadius: 10,
  },
  buttonLabelStyle: {
    fontSize: verticalScale(12),
    fontWeight: '700',
  },
  tickIcon: {
    tintColor: Colors.lightPink,
    width: verticalScale(14),
    height: verticalScale(14),
    resizeMode: 'contain',
  },
  newPostSheet: {
    backgroundColor: Colors.white,
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(10),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
  newPostMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
  },
  newPostText: {
    fontSize: verticalScale(20),
    lineHeight: verticalScale(20),
    fontWeight: '800',
  },
  crossButton: {
    position: 'absolute',
    left: horizontalScale(10),
  },
  crossIcon: {
    width: verticalScale(24),
    height: verticalScale(24),
    resizeMode: 'contain',
  },
  input: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
    marginVertical: verticalScale(20),
    maxHeight: screenHeight.height70,
    minHeight: screenHeight.height30,
    textAlignVertical: 'top',
  },
  inputOptions: {
    paddingHorizontal: horizontalScale(10),
    color: Colors.black,
    flex: 1,
  },
  lowerSection: {
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
    marginHorizontal: horizontalScale(10),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  boxMainOptions: {
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginVertical: verticalScale(15),
    borderRadius: 11,
  },
  questionMain: {
    height: verticalScale(83),
    backgroundColor: Colors.theme,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.white,
  },
  optionsMain: {
    height: verticalScale(42),
    width: horizontalScale(326),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: verticalScale(22),
    backgroundColor: Colors.softWhite,
  },
  addOptionsMain: {
    height: verticalScale(42),
    width: horizontalScale(326),
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginTop: verticalScale(22),
    backgroundColor: Colors.softWhite,
  },
  optionsTag: {
    backgroundColor: Colors.offWhite,
    width: verticalScale(38),
    height: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: horizontalScale(12),
  },
  optionSerials: {
    fontSize: verticalScale(10),
    fontWeight: '700',
  },
  options: {
    fontSize: verticalScale(12),
    fontWeight: '700',
    color: Colors.black,
  },
  switchStyle: {
    marginRight: verticalScale(10),
  },
  plusIcon: {
    width: verticalScale(20),
    height: verticalScale(20),
    resizeMode: 'contain',
    position: 'absolute',
    left: horizontalScale(20),
  },
  addOptions: {
    fontSize: verticalScale(16),
    fontWeight: '600',
    color: Colors.black,
  },
});
