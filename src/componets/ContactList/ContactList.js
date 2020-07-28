import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import contactsSelectors from '../../redux/Contact/contactsSelectors';

import ContactListItem from '../ContactListItem/ContactListItem';

import styleConxt from '../../contex/ThemeContext';

import s from './ContactList.module.css';
import transition from '../ContactList/transitions/ContactLsTransition.module.css';

const ContactList = ({ contacts, theme }) => (
  <div
    className={s.Contact_list}
    style={{
      color: styleConxt[theme].fontColor,
      background: styleConxt[theme].bodybg,
    }}
  >
    <h2>Contacts</h2>
    <TransitionGroup component="ul">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={200} classNames={transition}>
          <ContactListItem key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

const mSTP = state => {
  return {
    contacts: contactsSelectors.getVisibleTasks(state),
    theme: contactsSelectors.getTheme(state),
  };
};

export default connect(mSTP, null)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.node,
    }),
  ).isRequired,
};
