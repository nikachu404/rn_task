import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth0} from 'react-native-auth0';
import {LogoSvg} from '../assets/icons/LogoSvg';
import {Button, Header} from '../components';

export const LoginScreen: React.FC = () => {
  const {authorize, isLoading, error} = useAuth0();
  const navigation = useNavigation();

  const onLoginPress = async () => {
    try {
      await authorize();
      navigation.navigate('Home' as never);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header screenName="Home" />
      <View style={styles.container}>
        <LogoSvg />
        <Button text="Login" onPress={onLoginPress} style={{width: 'auto'}} />
        {!error && isLoading && <Text>Logging in...</Text>}
        {error && <Text>Authentication error. Please, try again</Text>}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});
