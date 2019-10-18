import { Platform } from 'react-native';


const prefix = Platform.OS === 'ios' ? 'ios' : 'md';


export const ADD_IMAGE = `${prefix}-image`;
export const CHECK = `${prefix}-checkmark`;
export const CREATE = `${prefix}-color-wand`;
export const HISTORY = `${prefix}-contacts`;
export const HOURGLASS = `${prefix}-hourglass`;
export const TAKE_IMAGE = `${prefix}-camera`;
export const LEARN = `${prefix}-school`;
export const PLAY = `${prefix}-play-circle`;
export const REFRESH = `${prefix}-refresh-circle`;
export const SAVE = `${prefix}-save`;
export const SETTINGS = `${prefix}-options`;
export const TRENDING = `${prefix}-flame`;
export const USER = `${prefix}-options`;
export const EYE = `${prefix}-eye`;
export const EYE_OFF = `${prefix}-eye-off`;
