import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { INITIAL_STATE_FORM } from '../../helpers/constants';

import { onAddContacts } from '../../redux/Contact/contactsOperations';
import { overlapToggle } from '../../redux/Contact/contactActions';
import contactsSelectors from '../../redux/Contact/contactsSelectors';

import Logo from '../Logo/Logo';
import LogoSlide from '../Logo/transitions/Logo.module.css';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE_FORM,
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { contacts, onAddContacts, overlapToggle } = this.props;
    const { name } = this.state;
    e.preventDefault();

    const overlap = contacts.some(contacts => contacts.name === name);
    if (!overlap) {
      this.reset();
      return onAddContacts({ ...this.state });
    } else overlapToggle(overlap);
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE_FORM });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={s.phoneBook_form}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={LogoSlide}
        >
          <Logo />
        </CSSTransition>
        <form onSubmit={this.handleSubmit}>
          <label className={s.phoneBook_lb}>
            Name
            <input
              className={s.phoneBook_inp}
              type="text"
              value={name}
              name="name"
              onChange={this.handleInputChange}
            />
          </label>
          <label className={s.phoneBook_lb}>
            Number
            <input
              className={s.phoneBook_inp}
              type="tel"
              value={number}
              name="number"
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" className={s.buttonPhonBk}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mDTP = { onAddContacts, overlapToggle };
const mSTP = state => ({
  contacts: contactsSelectors.getContacts(state),
});

export default connect(mSTP, mDTP)(ContactForm);

ContactForm.propTypes = {
  onRemove: PropTypes.func,
};
