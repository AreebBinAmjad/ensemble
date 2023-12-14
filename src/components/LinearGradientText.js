import { OpenSans_300Light, useFonts } from '@expo-google-fonts/open-sans';
import MaskedView from '@react-native-masked-view/masked-view';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Colors } from '../constants/assets/Colors';
import { horizontalScale, verticalScale } from '../utils/ScaleUtils';

const LinearGradientText = (props) => {
  const { name } = props;

  const [fontsLoaded] = useFonts({
    light: OpenSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <MaskedView maskElement={<Text style={[styles.title, { fontFamily: 'light' }]}>{name}</Text>}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[Colors.progress, Colors.lgPink]}>
        <View style={styles.backSideView} />
      </LinearGradient>
    </MaskedView>
  );
};

export default LinearGradientText;

const styles = StyleSheet.create({
  title: {
    fontSize: verticalScale(50),
    alignSelf: 'center',
  },
  backSideView: {
    opacity: 0,
    height: verticalScale(60),
    width: horizontalScale(300),
    marginVertical: verticalScale(10),
  },
});
