import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/auth/Splash';
import Sign_in from '../screens/auth/Sign_in';
import Verify from '../screens/auth/Verify_your_email_or_phone';
import Sign_Up from '../screens/auth/Sign_Up';
import Forgot_Password from '../screens/auth/Forgot_Password';
import Change_Password from '../screens/auth/Change_Password';
import BottomTabNavigator from './BottomTabNavigator';
import EditProfile from '../screens/main/EditProfile';
import Videos from '../screens/main/Videos';
import Appointment from '../screens/main/Appointment';
import About from '../screens/main/About';
import MedicareToolkit from '../screens/main/MedicareToolkit';
import Payment from '../screens/main/Payment';
import Planning from '../screens/main/Planning';
import Insurance from '../screens/main/Insurance';
import Portfolio from '../screens/main/Portfolio ';
import Basics from '../screens/main/Basics';
import Blog from '../screens/main/Blog';
const Stack = createStackNavigator();

export default function StackNavigatior() {
  const AuthScreens = {
    Splash: Splash,
    Sign_in: Sign_in,
    Verify: Verify,
    Sign_Up: Sign_Up,
    Forgot_Password: Forgot_Password,
    Change_Password: Change_Password,
    Home: BottomTabNavigator,
    EditProfile: EditProfile,
    Videos: Videos,
    Appointment: Appointment,
    About: About,
    MedicareToolkit: MedicareToolkit,
    Payment: Payment,
    Planning: Planning,
    Insurance: Insurance,
    Portfolio: Portfolio,
    Basics: Basics,
    Blog: Blog,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries({
          ...AuthScreens,
        }).map(([name, component]) => {
          return <Stack.Screen key={name} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
