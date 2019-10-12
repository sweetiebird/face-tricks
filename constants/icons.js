import { Platform } from 'react-native';


const prefix = Platform.OS === 'ios' ? 'ios' : 'md';


export const ADD_IMAGE = `${prefix}-cloud-upload`;
export const CREATE = `${prefix}-color-wand`;
export const HISTORY = `${prefix}-contacts`;
export const USER = `${prefix}-options`;
