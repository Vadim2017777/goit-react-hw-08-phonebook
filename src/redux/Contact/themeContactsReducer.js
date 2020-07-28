import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { onChangeTheme } from './contactActions';

const changeTheme = (state, { payload }) => (payload ? 'dark' : 'light');

const theme = createReducer('light', {
  [onChangeTheme]: changeTheme,
});

export default combineReducers({
  theme,
});
