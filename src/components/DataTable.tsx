import {StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Country} from '../types/Country';

type Props = {
  data: Country[];
  page: number;
  from: number;
  to: number;
  itemsPerPage: number;
  numberOfItemsPerPageList: number[];
  setPage: (page: number) => void;
  setItemsPerPageChange: (itemsPerPage: number) => void;
};

export const DataTableComponent: React.FC<Props> = ({
  data,
  page,
  from,
  to,
  itemsPerPage,
  numberOfItemsPerPageList,
  setPage,
  setItemsPerPageChange,
}) => {
  return (
    <DataTable>
      <DataTable.Header style={styles.dataTableHeader}>
        <DataTable.Title textStyle={styles.dataTableHeaderText}>
          Id
        </DataTable.Title>
        <DataTable.Title textStyle={styles.dataTableHeaderText}>
          Name
        </DataTable.Title>
        <DataTable.Title textStyle={styles.dataTableHeaderText}>
          Classification
        </DataTable.Title>
      </DataTable.Header>

      {data.slice(from, to).map(({name, capital, emoji}) => (
        <DataTable.Row key={name}>
          <DataTable.Cell>{name}</DataTable.Cell>
          <DataTable.Cell numeric>{capital}</DataTable.Cell>
          <DataTable.Cell numeric>{emoji}</DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={page => setPage(page)}
        label={`${from + 1}-${to} of ${data.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  );
};

const styles = StyleSheet.create({
  dataTableHeader: {
    backgroundColor: '#1a202c',
  },
  dataTableHeaderText: {
    color: '#fff',
  },
});
