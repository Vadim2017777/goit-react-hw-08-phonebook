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

const onFetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(fetchContactsSuccess(data));
    })
    .catch(error => dispatch(fetchContactsError(error)));
};

const onAddContacts = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', { name, number })
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError(error)));
};

const onRemoveContacts = id => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => dispatch(removeContactError(error)));
};

export { onFetchContacts, onAddContacts, onRemoveContacts };
