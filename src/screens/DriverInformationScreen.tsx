import {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import {fetchOneDriver} from '../stores/slices/driversSlice';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../stores/store';
import {LabeledRecord} from '../components/labeled-record';

export default function DriverInformation({route}) {
  const {driverId} = route.params;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (driverId) {
      dispatch(fetchOneDriver(driverId));
    }
  }, [driverId]);
  const data = useSelector((state: any) => state.drivers.fetchOneDriver.data);
  const displayName = `${data.familyName}${data.givenName}`;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 35,
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../assets/images/empty_user_profile.png')}
        />
        <View>
          <LabeledRecord value={displayName} label="DriverName" />
          <LabeledRecord value={data.nationality} label="Nationality" />
          <LabeledRecord value={data.dateOfBirth} label="Date Of Birth" />
          <LabeledRecord value={data.permanentNumbr} label="Permanent Number" />
        </View>
      </View>
    </View>
  );
}
