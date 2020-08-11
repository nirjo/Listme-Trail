import { useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const updateMeMutation = gql`
  mutation updateMe($input: UpdateUserInput!) {
    updateMe(input: $input) {
      id
    }
  }
`;

const getPushNotificationPermissions = async (updateMe) => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS,
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }
  console.log(finalStatus);

  // Get the token that uniquely identifies this device
  const token = await Notifications.getExpoPushTokenAsync();
  console.log('Notification Token: ', token);
  updateMe({ variables: { input: { pushToken: token } } });
};

const PushNotifications = () => {
  const [updateMe] = useMutation(updateMeMutation);

  useEffect(() => {
    getPushNotificationPermissions(updateMe);
  }, []);

  return null;
};

export default PushNotifications;
