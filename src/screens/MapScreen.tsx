import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MapboxGL from '@rnmapbox/maps';
import {Button, Header} from '../components';

const mapboxToken = process.env.REACT_APP_MAPBOX_TOKEN as string;

MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(mapboxToken);

export const MapScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home' as never);
  };

  return (
    <View style={styles.container}>
      <Header screenName="Map" />
      <View style={styles.content}>
        <MapboxGL.MapView style={styles.map} />
        <Button
          text="Home"
          onPress={handleHomePress}
          style={{backgroundColor: '#1a202c'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    gap: 40,
    padding: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
});
