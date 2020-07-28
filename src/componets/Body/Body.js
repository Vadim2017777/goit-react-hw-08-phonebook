import React from 'react';

import { connect } from 'react-redux';

import contactsSelectors from '../../redux/Contact/contactsSelectors';

import styleConxt from '../../contex/ThemeContext';
import s from './Body.module.css';
const Body = ({ theme, children }) => (
  <div
    className={s.body}
    style={{
      color: styleConxt[theme].fontColor,
      background: styleConxt[theme].bodybg,
    }}
  >
    {children}
  </div>
);

const mSTP = state => ({ theme: contactsSelectors.getTheme(state) });

export default connect(mSTP, null)(Body);
