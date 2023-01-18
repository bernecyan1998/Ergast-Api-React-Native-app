import {View, Text} from 'react-native';
import {styles} from './styles';

export const TableDetails = ({currentPage, totalPages, totalResults}) => {
  return (
    <View style={styles.tableDetailsWrapper}>
      <Text style={{color: '#000'}}>
        Page: {currentPage + 1} of {totalPages < 1 ? 1 : totalPages}
      </Text>
      <Text style={{color: '#000'}}>Results: {totalResults}</Text>
    </View>
  );
};
