import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import AuthStack from './src/NavigationContainer/AuthStack';
import UnauthStack from './src/NavigationContainer/UnauthStack';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);

      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, []);

  if (initializing) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <UnauthStack />}
    </NavigationContainer>
  );
};

export default App;