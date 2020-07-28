import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getError = state => state.contacts.error;
const getTheme = state => state.themePhonebook.theme;
const getFilter = state => state.contacts.filter;
const getOverlap = state => state.contacts.overlap;

const getVisibleTasks = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const getContactById = createSelector(
  [(_, id) => id, getContacts],
  (id, contacts) => contacts.find(contact => contact.id === id),
);

export default {
  getContacts,
  getError,
  getTheme,
  getFilter,
  getOverlap,
  getVisibleTasks,
  getContactById,
};
