import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

const splash = ({ navigation }: {navigation: any}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('main');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>The Perfect Dream House for you</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1D5C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: '#CAA26A',
    height: 250,
    width: 250,
    borderRadius: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    color: '#fff',
    marginHorizontal: 20,
    textAlign: 'center',
  },
});

export default splash;