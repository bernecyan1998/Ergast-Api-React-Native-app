import {isEmpty} from 'lodash';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ITableContent} from '../../types';
import {Skeleton} from '../skeleton/skeleton';

export const TableContent = ({dataSource, columns, loading}: ITableContent) => {
  const skeletonCount = 10;
  const renderData = isEmpty(dataSource)
    ? new Array(skeletonCount)
    : dataSource;

  const filteredColumns = columns.filter(item => !item.hidden);
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        style={{borderWidth: 1, borderTopWidth: 0}}
        contentContainerStyle={{
          width: '100%',
        }}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, width: '100%', backgroundColor: '#000'}} />
        )}
        data={renderData}
        renderItem={({item}) => {
          return (
            <View>
              <FlatList
                keyExtractor={item => item.key}
                scrollEnabled={false}
                horizontal
                data={filteredColumns}
                contentContainerStyle={{
                  width: '100%',
                  justifyContent: 'space-around',
                  height: 40,
                }}
                ItemSeparatorComponent={() => (
                  <View
                    style={{height: '100%', width: 1, backgroundColor: '#000'}}
                  />
                )}
                renderItem={column => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        column.item?.onPress(item[column.item?.params])
                      }
                      style={{
                        width: 100,
                        justifyContent: 'center',
                        padding: 5,
                      }}>
                      {loading ? (
                        <Skeleton />
                      ) : (
                        <Text
                          style={{
                            color:
                              column.item.type === 'link' ? '#146e08' : '#333',
                            textDecorationLine:
                              column.item.type === 'link'
                                ? 'underline'
                                : 'none',
                            textAlign: 'center',
                            fontWeight: '500',
                          }}>
                          {item[column.item.key]}
                        </Text>
                      )}
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};
