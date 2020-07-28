import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { onChangeFilter } from '../../redux/Contact/contactActions';

import contactsSelectors from '../../redux/Contact/contactsSelectors';

import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <div className={s.phone_filter}>
    <h3>Find my contacts</h3>
    <input
      type="text"
      className={s.phone_filterInp}
      value={filter}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

const mSTP = state => ({
  value: contactsSelectors.getContacts(state),
});

const mDTP = {
  onChange: onChangeFilter,
};

export default connect(mSTP, mDTP)(Filter);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
