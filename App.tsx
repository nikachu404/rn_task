import React from 'react';
import 'core-js/full/symbol/async-iterator';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider, cacheExchange, fetchExchange, createClient} from 'urql';
import {Auth0Provider} from 'react-native-auth0';
import {PaperProvider} from 'react-native-paper';
import {HomeScreen, MapScreen, UrqlScreen, LoginScreen} from './src/screens/';
import {REACT_APP_AUTH_DOMAIN, REACT_APP_AUT_CLIENT_ID} from '@env';

const Stack = createNativeStackNavigator();

export const client = createClient({
  url: 'https://countries.trevorblades.com/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

const authDomain = REACT_APP_AUTH_DOMAIN;
const authClientId = REACT_APP_AUT_CLIENT_ID;

function App(): JSX.Element {
  return (
    <>
      <Auth0Provider domain={authDomain} clientId={authClientId}>
        <Provider value={client}>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Map" component={MapScreen} />
                <Stack.Screen name="Urql" component={UrqlScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </Provider>
      </Auth0Provider>
    </>
  );
}

export default App;
