import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

interface Props {
  font: string;
  text: string;
  style?: StyleProp<TextStyle>;
}

const TextComponent = (prop: Props) => {
  const {font, text, style} = prop;
  return <Text style={[styles.text, {fontFamily: font}, style]}>{text}</Text>;
};

export default TextComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'red',
    padding: 10,
  },
});
