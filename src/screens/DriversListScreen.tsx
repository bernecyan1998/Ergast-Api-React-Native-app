import {View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {fetchDrivers} from '../stores/slices/driversSlice';
import {TableView} from '../components/table-view';
import {AppDispatch} from '../stores/store';
import {driverColumns} from '../constats';
import {IDriverItemType} from '../types';

export default function DriversList() {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(0);

  const data = useSelector((state: any) => state.drivers.fetchDrivers.data);
  const total = useSelector((state: any) => state.drivers.fetchDrivers.total);
  const loading = useSelector(
    (state: any) => state.drivers.fetchDrivers.loading,
  );

  const [params, setParams] = useState({
    limit: 10,
    offset: 0,
  });
  const totalPages = Math.ceil(total / params.limit);

  useEffect(() => {
    setParams({
      ...params,
      offset: currentPage * 10,
    });
  }, [currentPage]);

  useEffect(() => {
    handleRefresh();
  }, [params]);

  const handleNextPageChange = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };
  const handlePrevPageChange = () => {
    if (currentPage >= 1) setCurrentPage(currentPage - 1);
  };
  const handleChangePage = (page: number) => {
    if (currentPage !== page) setCurrentPage(page);
  };

  const handleRefresh = () => {
    dispatch(fetchDrivers(params));
  };

  const pagination = {
    total: totalPages,
    page: currentPage,
    offset: 0,
    limit: 10,
  };

  const transformedData = data?.map(
    ({
      familyName,
      givenName,
      permanentNumber,
      nationality,
      dateOfBirth,
      driverId,
    }: IDriverItemType) => {
      return {
        driverName: `${familyName} ${givenName}`,
        permanentNumber: permanentNumber || '',
        nationality,
        dateOfBirth,
        driverId,
        standings: 'View',
      };
    },
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 500, paddingHorizontal: 5}}>
        <TableView
          EmptyStateProps={{
            title: 'No Results found',
            description: 'Check your internet connection and try again.',
            action: (
              <Button title="Refresh" color="#000" onPress={handleRefresh} />
            ),
          }}
          totalRecords={total}
          loading={loading}
          onNextPageChange={handleNextPageChange}
          onPrevPageChange={handlePrevPageChange}
          onPageChange={handleChangePage}
          dataSource={transformedData}
          columns={driverColumns}
          pagination={pagination}
          showPagination
        />
      </View>
    </View>
  );
}
