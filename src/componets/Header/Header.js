import React from 'react';
import { connect } from 'react-redux';

import { onChangeTheme } from '../../redux/Contact/contactActions';

import styleConxt from '../../contex/ThemeContext';

import styles from './Header.module.css';

const Header = ({ theme, toggleTheme }) => (
  <header
    style={{
      background: styleConxt[theme].headerBg,
      color: styleConxt[theme].fontColor,
    }}
  >
    <div className={styles.theme_selector}>
      <span className={styles.label}>
        Toggle theme: {''}
        {theme}
      </span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={({ currentTarget }) => toggleTheme(currentTarget.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </header>
);

const mDTP = { toggleTheme: onChangeTheme };
const mSTP = ({ themePhonebook }) => ({ theme: themePhonebook.theme });

export default connect(mSTP, mDTP)(Header);
