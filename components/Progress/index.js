import { Platform } from 'react-native';

import ProgressIos from './Progress.ios';
import ProgressAndroid from './Progress.android';


export default Platform.select({
  ios: ProgressIos,
  android: ProgressAndroid,
  default: ProgressAndroid,
});
