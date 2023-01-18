import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DriverInformation from '../screens/DriverInformationScreen';
import DriversListScreen from '../screens/DriversListScreen';
import DriverStandings from '../screens/DriverStandingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="welcomeScreen">
        <Stack.Screen
          name="welcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="driversScreen"
          component={DriversListScreen}
          options={{
            headerShown: true,
            headerBackVisible: false,
            headerTitle: 'Drivers',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="driverInformationScreen"
          component={DriverInformation}
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerTitle: 'Driver Information',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="driverStandingsScreen"
          component={DriverStandings}
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerTitle: 'Driver Standings',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
