import {ScrollView, View} from 'react-native';
import {TableHeader} from './table-header';
import {TableContent} from './table-content';
import {TableDetails} from './table-details';
import {TablePagination} from './table-pagination';
import {isEmpty} from 'lodash';
import {EmptyState} from '../empty-state';
import {ITablePrpps} from '../../types';

export const TableView = ({
  dataSource,
  totalRecords,
  columns,
  showPagination,
  pagination,
  onNextPageChange,
  onPrevPageChange,
  onPageChange,
  loading,
  EmptyStateProps,
}: ITablePrpps) => {
  const totalPages = Math.ceil(totalRecords / pagination.limit);
  return (
    <View>
      {!loading && !dataSource ? (
        <View
          style={{
            height: 400,
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
          }}>
          <EmptyState {...EmptyStateProps} />
        </View>
      ) : (
        <>
          <ScrollView horizontal showsHorizontalScrollIndicator>
            <View>
              {(loading || !isEmpty(dataSource)) && (
                <>
                  <View>
                    <TableHeader columns={columns} />
                  </View>
                  <View>
                    <TableContent {...{dataSource, columns, loading}} />
                  </View>
                </>
              )}
            </View>
          </ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginTop: 25, flexDirection: 'row'}}>
              <TableDetails
                currentPage={pagination?.page}
                totalPages={totalPages}
                totalResults={totalRecords}
              />
              {showPagination && (
                <TablePagination
                  {...{
                    onPageChange,
                    onNextPageChange,
                    onPrevPageChange,
                    ...pagination,
                  }}
                />
              )}
            </View>
          </View>
        </>
      )}
    </View>
  );
};
