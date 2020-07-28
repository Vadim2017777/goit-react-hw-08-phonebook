import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contact/contactsReducer';
import themeContactsReducer from './Contact/themeContactsReducer';

const store = configureStore({
  reducer: { contacts: contactsReducer, themePhonebook: themeContactsReducer },
});

export default store;
