import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Icon, CartBadge } from '../components/elements';
import theme from '../utils/theme';
import Splash from './Splash';
import GetStarted from './GetStarted';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import AllowNotifications from './AllowNotifications';
import Dashboard from './Dashboard';
// import GuestList from './GuestList';
// import Profile from './Profile';
import Settings from './Settings';
import ProfileUpdate from './ProfileUpdate';
import ProfileDrivingLicence from './ProfileUpdate/DrivingLicence';
import ProfileShippingAddress from './ProfileUpdate/ShippingAddress';
import ProfileEmail from './ProfileUpdate/Email';
import ProfileUserName from './ProfileUpdate/UserName';
import ProfilePicture from './ProfileUpdate/ProfilePicture';
import ProfileGender from './ProfileUpdate/Gender';
import ProfileTelephone from './ProfileUpdate/Telephone';
import ProfileAddCreditCard from './ProfileUpdate/AddCreditCard';


// import Test from './Test';

// eslint-disable-next-line prefer-const

const navigationOptions = ({ icon, cart }) => {
  const options = {};
  options.tabBarIcon = ({ tintColor }) => (
    <>
      <Icon name={icon} size={27} color={tintColor} />
      {cart && <CartBadge />}
    </>
  );
  return options;
};

const LoginStack = createStackNavigator({
  GetStarted,
  Login,
  ForgotPassword,
  Register,
  AllowNotifications,
});

const HomeStack = createStackNavigator(
  {
    Dashboard,
  },
  {
    navigationOptions: () => navigationOptions({ icon: 'dashboard' }),
  },
);

// const CartStack = createStackNavigator(
//   {
//     Cart,
//     Checkout,
//     Success,
//   },
//   {
//     navigationOptions: () =>
//       navigationOptions({ icon: 'shopping-cart', cart: true }),
//   },
// );

const ProfileStack = createStackNavigator(
  {
    // Profile,
    Settings,
    ProfileUpdate,
    ProfileDrivingLicence,
    ProfileAddCreditCard,
    ProfileShippingAddress,
    ProfileEmail,
    ProfilePicture,
    ProfileGender,
    ProfileTelephone,
    ProfileUserName,
  },

  {
    navigationOptions: () => navigationOptions({ icon: 'person' }),
  },
);

const MainStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: theme.mainBrandColor,
      inactiveTintColor: theme.textColorLite,
      style: {
        borderTopColor: theme.borderColor,
        backgroundColor: theme.lightShades,
        paddingTop: 10,
        paddingBottom: 5,
        elevation: 5,
        height: 55,
      },
    },
  },
);
export default ({ isLoggedIn }) => {
  let app = MainStack;
  if (!isLoggedIn) {
    app = LoginStack;
  }

  return createAppContainer(
    createSwitchNavigator({
      // OrderView, // TODO: for testing add screen here
      Splash,
      App: app,
    }),
  );
};
