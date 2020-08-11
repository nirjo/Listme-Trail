import ApolloClient from 'apollo-client';
import { AsyncStorage } from 'react-native';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import apolloLogger from 'apollo-link-logger';

import config from './config';

const cache = new InMemoryCache();

// force login
// AsyncStorage.setItem(
//   'token',
//   'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYTVhYjMwNmRkOTQwZWEyNjhkZDY1NCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTU3Mjg1MTU2Nn0.9OOHCi0kiOT26nV_YGKxjRy75CcfQqDGSdD34tGt6go',
// );

export const persistor = new CachePersistor({
  cache,
  storage: AsyncStorage,
  debug: config.debug,
});
persistor.restore();

const httpLink = createHttpLink({
  uri: config.debug ? config.graphQlUriDev : config.graphQlUri,
  credentials: 'same-origin',
});
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await AsyncStorage.getItem('token');
  // console.log('token', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || '',
    },
  };
});

const client = new ApolloClient({
  link: ApolloLink.from([
    apolloLogger,
    onError(({ graphQLErrors, networkError }) => {
      if (config.debug) {
        // console.log('onError', graphQLErrors, networkError);
      }
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => {
          console.log('graphQLErrors', message);
        });
      }
      if (networkError) {
        console.log('networkError', networkError);
      }
    }),
    authLink.concat(httpLink),
  ]),
  cache,
});

// client.onResetStore(() => persistor.purge());
// persistor.purge();
// clear local storage
// AsyncStorage.clear();
// clear local storage
// Purge persistor when the store was reset.

export default client;
