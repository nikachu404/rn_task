import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

type Props = {
  screenName: string;
};

export const Header: React.FC<Props> = ({screenName}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>{screenName}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#1a202c',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
