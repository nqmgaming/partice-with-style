import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FONT_FAMILY} from '../constants/fontFamily';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/paris.jpg')}
        style={styles.imageBackGround}>
        <View style={styles.boxImage}>
          <View style={styles.topBoxImage}>
            <View>
              <AntDesign name="arrowleft" size={25} color="white" />
            </View>
            <Entypo name="dots-three-vertical" size={25} color="white" />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 20,
          }}>
          <View>
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,0.4)',
                padding: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                Paris France
              </Text>
              <Text style={{color: 'white', fontSize: 15}}>
                Amazing 5 day tour to the city of love. Visit the Eiffel Tower,
                Arc de Triomphe, Notre Dame de Paris, and more!
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      {/* heart between image and detail */}
      <View
        style={{
          position: 'absolute',
          top: 390,
          right: 20,
          backgroundColor: 'white',
          borderRadius: 50,
          padding: 10,
          elevation: 10,
          zIndex: 10,
        }}>
        <AntDesign name="heart" size={24} color="red" />
      </View>
      <View style={styles.boxDetail}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingTop: 20,
            gap: 16,
          }}>
          <Entypo name="location" size={24} color="black" />
          <Text>
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoBold,
                color: 'black',
                fontSize: 20,
              }}>
              Location
            </Text>
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoRegular,
                color: 'black',
                fontSize: 20,
              }}>
              {' '}
              Paris, France
            </Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingHorizontal: 20,
            gap: 16,
            marginTop: 10,
          }}>
          <StarRating
            maxStars={5}
            rating={4.7}
            fullStarColor="yellow"
            halfStarColor="yellow"
            emptyStarColor="yellow"
            starSize={18}
            containerStyle={{
              width: 100,
              marginTop: 5,
            }}
          />
          <Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              4.7
            </Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              (234 reviews)
            </Text>
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontFamily: FONT_FAMILY.robotoBold,
              color: 'black',
              fontSize: 20,
              paddingHorizontal: 20,
              marginTop: 10,
            }}>
            About the tour
          </Text>
          <Text
            style={{
              fontFamily: FONT_FAMILY.robotoRegular,
              color: 'black',
              fontSize: 18,
              paddingHorizontal: 20,
              marginTop: 10,
            }}>
            Take a five-day journey in Iceland, visiting the Golden Circle,
            South Coast, Blue Lagoon, and an authentic ice cave with this
            all-encompassing winter package. Travelers seeking the culture,
            history, and spectacular snowy landscapes that make Iceland the
            perfect winter destination should book this vacation package now.
          </Text>
        </View>
        <Text
          style={{
            fontFamily: FONT_FAMILY.robotoBold,
            color: 'black',
            fontSize: 20,
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          What's included:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 20,
              gap: 16,
              alignItems: 'center',
            }}>
            <AntDesign name="clockcircleo" size={20} color="black" />
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoMedium,
                color: 'black',
                fontSize: 20,
              }}>
              5 days
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 20,
              gap: 16,
              alignItems: 'center',
            }}>
            <FontAwesome name="language" size={24} color="black" />
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoMedium,
                color: 'black',
                fontSize: 20,
              }}>
              English
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 20,
              gap: 10,
              alignItems: 'center',
            }}>
            <Ionicons name="pricetag" size={24} color="black" />
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoMedium,
                color: 'black',
                fontSize: 20,
              }}>
              Cheap
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 20,
              gap: 16,
              alignItems: 'center',
            }}>
            <Feather name="calendar" size={24} color="black" />
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoMedium,
                color: 'black',
                fontSize: 20,
              }}>
              Available all year
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 20,
              gap: 16,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="human-female-boy"
              size={24}
              color="black"
            />
            <Text
              style={{
                fontFamily: FONT_FAMILY.robotoMedium,
                color: 'black',
                fontSize: 20,
              }}>
              Minium age: 8
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.boxPrice}>
        <View>
          <Text
            style={{
              fontFamily: FONT_FAMILY.robotoBold,
              color: 'white',
              fontSize: 20,
              paddingHorizontal: 5,
              marginTop: 10,
            }}>
            Price From{' '}
            <Text style={{fontSize: 20, fontWeight: 'bold'}}> $1,999</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            gap: 16,
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 50,
            padding: 10,
            elevation: 10,
            zIndex: 10,
          }}>
          <AntDesign name="arrowright" size={24} color="green" />
          <Text
            style={{
              fontFamily: FONT_FAMILY.robotoBold,
              color: 'green',
              fontSize: 17,
            }}>
            Continue to payment{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  boxImage: {
    flex: 4,
  },
  boxDetail: {
    flex: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    borderBlockColor: 'black',
    marginTop: -20,
  },
  boxPrice: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  topBoxImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 10,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  imageBackGround: {
    flex: 5,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
