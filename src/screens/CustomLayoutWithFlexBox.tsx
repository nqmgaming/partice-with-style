import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
// import {FontAwesome5, Feather} from 'react-native-vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FONT_FAMILY} from '../constants/fontFamily';
const CustomLayoutWithFlexBox = () => {
  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={require('../assets/images/background.jpg')}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <View style={styles.headerIcon}>
          <Feather
            style={styles.borderImage}
            name="bookmark"
            size={30}
            color="black"
          />
          <FontAwesome5
            style={styles.borderImage}
            name="heart"
            size={30}
            color="black"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              styles.text,
              {color: 'white', fontFamily: FONT_FAMILY.robotoBold},
            ]}>
            Pexels has now changed its entity name to Canva Germany GmbH. We've
            updated our Terms and Privacy Policy.
          </Text>
        </View>
        <View style={styles.bottom}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Image
              source={{
                uri: 'https://images.pexels.com/users/avatars/359504/artem-saranin-872.jpeg?auto=compress&fit=crop&h=50&w=50&dpr=1',
              }}
              style={styles.avatar}
            />
            <Text
              style={[
                styles.text,
                {color: 'white', fontFamily: FONT_FAMILY.robotoBold},
              ]}>
              Artem Saranin
            </Text>
          </View>
          <View style={styles.bottomDownload}>
            <AntDesign name="download" size={24} color="black" />
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoBold,
                color: 'black',
                fontSize: 20,
              }}>
              Download
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CustomLayoutWithFlexBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'red',
    padding: 10,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 40,
    gap: 20,
    alignItems: 'center',
  },
  borderImage: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  bottom: {
    flex: 1,
    marginBottom: 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  bottomDownload: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    gap: 10,
  },
});
