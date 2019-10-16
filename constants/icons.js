import { Platform } from 'react-native';


const prefix = Platform.OS === 'ios' ? 'ios' : 'md';


export const ADD_IMAGE = `${prefix}-cloud-upload`;
export const CREATE = `${prefix}-color-wand`;
export const HISTORY = `${prefix}-contacts`;
export const HOURGLASS = `${prefix}-hourglass`;
export const LEARN = `${prefix}-school`;
export const PLAY = `${prefix}-play-circle`;
export const SETTINGS = `${prefix}-options`;
export const USER = `${prefix}-options`;
