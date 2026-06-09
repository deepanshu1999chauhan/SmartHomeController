import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const managebadroom = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <ImageBackground
        style={style.image}
        source={require('../images/badroom.png')}>
        <View style={style.container}>
          <Image
            style={style.image2}
            source={require('../images/menu button.png')}
          />
          <Image
            style={style.image3}
            source={require('../images/avatar.png')}
          />
        </View>
        <View style={style.container3}>
          <View>
            <Text style={style.text}>Bedrooms</Text>
            <Text style={style.text2}>Usage today</Text>
          </View>
          <TouchableOpacity style={style.touchable}>
            <Text style={style.text3}>...</Text>
          </TouchableOpacity>
        </View>
        <View style={style.nodata}>
          <Text style={style.data}>No Data...</Text>
        </View>

        <View style={style.choosedata}>
          <Text style={style.choose}>Choose:</Text>
        </View>
        <Image
          style={style.image4}
          source={require('../images/No statistics.png')}
        />

        <View style={style.lightcontainer2}>
          <TouchableOpacity style={style.lightcontainer}
            onPress={() => navigation.navigate('managefans')}
          >
            <Image
              style={style.light}
              source={require('../images/Vector-5.png')}
            />
            <Text style={style.sound}>Light</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.lightcontainer}
            onPress={() => navigation.navigate('managesound')}
          >
            <Image
              style={style.light}
              source={require('../images/volume-2.png')}
            />
            <Text style={style.sound}>Sound</Text>
          </TouchableOpacity>
        </View>

        <View style={style.lightcontainer2}>
          <TouchableOpacity style={style.lightcontainer}
            onPress={() => navigation.navigate('managefans2')}
          >
            <Image
              style={style.light}
              source={require('../images/fan.png')}
            />
            <Text style={style.sound}>Fans</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.lightcontainer}
            onPress={() => navigation.navigate('manageheater')}
          >
            <Image
              style={style.light}
              source={require('../images/Vector-6.png')}
            />
            <Text style={style.sound}>Heater</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 70,
    marginHorizontal: 33,
  },
  image: {
    height: 880,
    width: 450,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 30
  },
  text2: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 50,
    marginTop: 10,
  },
  image2: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  image3: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginRight: 40
  },
  image4: {
    height: 10,
    width: 346,
    resizeMode: 'contain',
    marginTop: 40,
    marginLeft: 33,
    marginBottom: 40,
  },
  touchable: {
    backgroundColor: 'black',
    marginHorizontal: 90,
    borderRadius: 20,
    marginTop: 36,
    paddingHorizontal: 30,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18
  },
  text3: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    paddingBottom: 10,
  },
  nodata: {
    backgroundColor: '#fff',
    padding: 13,
    marginHorizontal: 30,
    marginTop: 50,
    marginRight: 246,
    borderRadius: 28
  },
  data: {
    fontSize: 20,
    textAlign: 'center',
    color: '#616150',
  },
  choosedata: {
    backgroundColor: '#fff',
    padding: 13,
    marginLeft: 210,
    marginRight: 73,
    borderRadius: 28,
    justifyContent: 'flex-end',
  },
  choose: {
    fontSize: 20,
    textAlign: 'center',
    color: '#616150',
  },
  light: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 13,
  },
  lightcontainer: {
    backgroundColor: 'black',
    padding: 30,
    borderRadius: 16,
    width: '32%',
  },
  lightcontainer2: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    marginBottom: 20,
    marginRight: 46
  },
  sound: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default managebadroom;