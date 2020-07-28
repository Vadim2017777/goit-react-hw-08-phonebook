import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactSuccess,
  removeContactSuccess,
  fetchContactsSuccess,
  onChangeFilter,
  fetchContactsError,
  addContactError,
  removeContactError,
  overlapToggle,
} from './contactActions';

const addContacts = (state, { payload }) => [...state, payload];

const removeContacts = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const onFilter = (state, { payload }) => payload;

const onError = (state, { payload }) => (payload ? payload : null);

const items = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: addContacts,
  [removeContactSuccess]: removeContacts,
});

const filter = createReducer('', {
  [onChangeFilter]: onFilter,
});

const error = createReducer(null, {
  [fetchContactsError]: onError,
  [addContactError]: onError,
  [removeContactError]: onError,
});

const overlap = createReducer(false, {
  [overlapToggle]: overlap => !overlap,
});

export default combineReducers({
  items,
  filter,
  error,
  overlap,
});
