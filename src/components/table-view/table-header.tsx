import {View, Text, FlatList} from 'react-native';
import {TableCellType} from '../../types';
import {styles} from './styles';

export const TableHeader = ({columns}) => {
  const filteredColumns = columns.filter((item: any) => !item.hidden);

  return (
    <View>
      <FlatList
        keyExtractor={item => item.key}
        style={{borderWidth: 1}}
        contentContainerStyle={styles.tableHeaderWrapper}
        data={filteredColumns}
        renderItem={({item}) => (
          <View
            style={{
              width: 100,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#333333',
                textAlign: 'center',
                fontWeight: '500',
              }}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
