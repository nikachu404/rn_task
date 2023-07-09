import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {gql, useQuery} from 'urql';
import {Header, DataTableComponent, Button} from '../components';

const UrqlQuery = gql`
  query {
    countries {
      name
      capital
      emoji
    }
  }
`;

export const UrqlScreen: React.FC = () => {
  const [result] = useQuery({query: UrqlQuery, variables: {page: 1}});
  const {data, fetching, error} = result;

  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([5, 4, 3]);
  const [itemsPerPage, setItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0],
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data?.countries?.length || 0);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home' as never);
  };

  if (fetching) return <Text>Loading...</Text>;
  if (error) return <Text>Oh no... {error.message}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <Header screenName="Urql" />
      <View style={styles.content}>
        <DataTableComponent
          data={data.countries}
          page={page}
          from={from}
          to={to}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          setItemsPerPageChange={setItemsPerPageChange}
        />
        <Button
          text="Home"
          onPress={handleHomePress}
          style={{backgroundColor: '#1a202c'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
});
