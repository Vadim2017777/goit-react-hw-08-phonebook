import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import contactsSelectors from '../../redux/Contact/contactsSelectors';

import NotificationtTansition from './transitions/NatificationTransition.module.css';

import s from './Natification.module.css';

const Notification = ({ overlap }) => (
  <CSSTransition
    in={overlap}
    timeout={200}
    classNames={NotificationtTansition}
    unmountOnExit
  >
    <div className={s.notification}>
      <span className={s.notificationText}>Contact already exist!</span>
    </div>
  </CSSTransition>
);

const mSTP = state => ({
  overlap: contactsSelectors.getOverlap(state),
});

export default connect(mSTP, null)(Notification);
