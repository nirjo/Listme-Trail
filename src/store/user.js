/* eslint no-param-reassign: 0 */

import { action } from 'easy-peasy';
import AsyncStorage from '@react-native-community/async-storage';

const user = {
  data: {},
  isLoggedIn: false,
  setUser: action((state, payload) => {
    state.data = payload;
  }),
  setIsLoggedIn: action((state, payload) => {
    // payload === item
    state.isLoggedIn = payload;
  }),
  logout: action(async state => {
    try {
      state.isLoggedIn = false;
      AsyncStorage.flushGetRequests();
      await AsyncStorage.clear();
      // await auth().signOut();
    } catch (e) {
      console.log('logout error', e);
    }
  }),
};

export default user;
