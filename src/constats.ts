import {navigate} from './navigation';

export const driverColumns = [
  {
    key: 'driverId',
    title: 'Driver Id',
    type: 'text',
    hidden: true,
    onPress: (value: string) => null,
    params: 'driverId',
  },
  {
    key: 'driverName',
    title: 'Driver Name',
    type: 'text',
    onPress: (value: string) =>
      navigate('driverInformationScreen', {driverId: value}),
    params: 'driverId',
  },
  {
    key: 'permanentNumber',
    title: 'Permanent Number',
    type: 'text',
    params: 'driverId',
    onPress: (value: string) => null,
  },
  {
    key: 'nationality',
    title: 'Nationality',
    type: 'text',
    params: 'driverId',
    onPress: (value: string) => null,
  },
  {
    key: 'dateOfBirth',
    title: 'DOB ',
    type: 'text',
    params: 'driverId',
    onPress: (value: string) => null,
  },
  {
    key: 'standings',
    title: 'Standings',
    type: 'link',
    params: 'driverId',
    onPress: (value: string) =>
      navigate('driverStandingsScreen', {driverId: value}),
  },
];

export const driverStandingsColumns = [
  {
    key: 'driverName',
    title: 'Driver',
    type: 'text',
    onPress: (value: string) => null,
    params: '',
  },
  {
    key: 'season',
    title: 'Season',
    type: 'text',
    onPress: (value: string) => null,
    params: '',
  },
  {
    key: 'round',
    title: 'Round',
    type: 'text',
    onPress: (value: string) => null,
    params: '',
  },
  {
    key: 'position',
    title: 'Position',
    type: 'text',
    params: '',
    onPress: (value: string) => null,
  },
  {
    key: 'constructor',
    title: 'Constructor',
    type: 'text',
    params: '',
    onPress: (value: string) => null,
  },
  {
    key: 'points',
    title: 'Points ',
    type: 'text',
    params: '',
    onPress: (value: string) => null,
  },
  {
    key: 'wins',
    title: 'Wins',
    type: 'text',
    params: '',
    onPress: (value: string) =>
      navigate('driverStandingsScreen', {driverId: value}),
  },
];
