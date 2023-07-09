import {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth0} from 'react-native-auth0';
import {Header, Button} from '../components';
import {LogoSvg} from '../assets/icons/LogoSvg';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const {user, clearSession} = useAuth0();

  useEffect(() => {
    checkAuthStatus();
  }, [user]);

  const checkAuthStatus = async () => {
    if (!user) {
      navigation.navigate('Login' as never);
    }
  };

  const handleLogoutPress = async () => {
    try {
      await clearSession();
      navigation.navigate('Login' as never);
    } catch (e) {
      console.log(e);
    }
  };

  const handleMapPress = () => {
    navigation.navigate('Map' as never);
  };

  const handleUrqlPress = () => {
    navigation.navigate('Urql' as never);
  };

  return (
    <>
      <Header screenName="Home" />
      <View style={styles.container}>
        <LogoSvg />
        <Text style={styles.statusText}>
          Auth0 User Status: {user ? 'Logged In' : 'Not Logged In'}
        </Text>
        <View style={styles.buttons}>
          <Button text="Map" onPress={handleMapPress} />
          <Button text="Urql" onPress={handleUrqlPress} />
        </View>
        <Button
          text="Logout"
          onPress={handleLogoutPress}
          underlayColor="#a50f0f"
          style={{backgroundColor: '#ff5252'}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    paddingTop: 10,
  },
  header: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statusText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttons: {
    display: 'flex',
    gap: 10,
    width: '100%',
  },
});
