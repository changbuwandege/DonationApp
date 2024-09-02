import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../Screen/Home/Home';
import SingleDonationInformation from '../Screen/SingleDonationInformation/SingleDonationInformation';
import Login from '../Screen/Login/Login';
import Registration from '../Screen/Registration/Registration';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationInformation}
        component={SingleDonationInformation}
      />
    </Stack.Navigator>
  );
};
