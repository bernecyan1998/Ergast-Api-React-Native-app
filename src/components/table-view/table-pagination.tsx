import {View, Text, TouchableOpacity, TextInput, Button} from 'react-native';
import {useState} from 'react';
import {ITablePagination} from '../../types';
import {styles} from './styles';

export const TablePagination = ({
  page,
  total,
  onNextPageChange,
  onPrevPageChange,
  onPageChange,
}: ITablePagination) => {
  const [customPage, setCustomPage] = useState<number>(page);

  const handleChangePageNumber = (page: number) => {
    setCustomPage(page);
  };
  const canChangePage =
    page !== customPage && customPage <= total && customPage >= 1;

  return (
    <View style={styles.tablePaginationWrapper}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={onPrevPageChange}>
          <Text style={{color: '#000'}}>&lt;&lt;&lt;</Text>
        </TouchableOpacity>
        <Text style={{color: '#000'}}>{page + 1}</Text>
        <TouchableOpacity onPress={onNextPageChange}>
          <Text style={{color: '#000'}}>&gt;&gt;&gt;</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000'}}>Go to page</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => handleChangePageNumber(parseInt(text))}
          style={{
            borderWidth: 0.5,
            color: '#000',
            padding: 5,
            height: 30,
          }}
        />
        <Button
          disabled={!canChangePage}
          title="Go"
          onPress={() => onPageChange(customPage - 1)}
          color="#000"
        />
      </View>
    </View>
  );
};
