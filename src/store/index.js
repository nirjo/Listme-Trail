import { createStore } from 'easy-peasy';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import schema from './schema';
import config from '../utils/config';

const store = createStore(schema, {
  name: config.projectKey,
  devTools: true,
  reducerEnhancer: reducer =>
    persistReducer(
      {
        key: config.projectKey,
        storage: AsyncStorage,
      },
      reducer,
    ),
});

const persistor = persistStore(store);
// persistor.purge(); // to clear store

export { store, persistor };
