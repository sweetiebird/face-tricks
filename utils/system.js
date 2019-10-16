import * as Permissions from 'expo-permissions';


export const requestCameraRollPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  return status === 'granted';
};

export const requestCameraPermissions = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  return status === 'granted';
};
