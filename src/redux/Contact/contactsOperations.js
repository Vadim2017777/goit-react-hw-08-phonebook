import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contactActions';

axios.defaults.baseURL = 'http://localhost:2000';

const onFetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const onAddContacts = ({ name, number }) => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', { name, number });
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const onRemoveContacts = id => async dispatch => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactError(error));
  }
};

export { onFetchContacts, onAddContacts, onRemoveContacts };
