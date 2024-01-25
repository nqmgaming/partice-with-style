import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT_FAMILY} from '../constants/fontFamily';
import TextComponent from '../components/TextComponent';

const FontsScreen = () => {
  return (
    <View style={styles.container}>
      <TextComponent
        font={FONT_FAMILY.rubikBurnedRegular}
        text="RubikBurned-Regular"
      />
      <TextComponent
        font={FONT_FAMILY.robotoBold}
        text="The User Interface (UI) is a huge part of any app. If the icon is your
        front door, the UI is the interior design. You can take the route of
        completely designing your UI from scratch, however, if you want to get
        it up and running fast while still having a polished finish, there are
        plenty of libraries already in place to help get your app where you want
        it"
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 20,
        }}
      />
    </View>
  );
};

export default FontsScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
