import { nanoid } from 'nanoid';
import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const LS_KEY = 'phone_contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log();
    this.setState({ contacts: JSON.parse(localStorage.getItem(LS_KEY)) || [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const isNameMatched = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameMatched) {
      alert(`${name} is already in contacts `);
      return;
    }

    const contactObj = { name, number, id: nanoid() };

    this.setState(prevState => ({
      contacts: [contactObj, ...prevState.contacts],
    }));
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    return;
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  dedeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
    localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  };

  cleanFilter = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <div className="d-flex flex-column mb-3 p-5 container-sm">
          <h1>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <h2>Contacts</h2>
          <Filter
            value={filter}
            onChange={this.changeFilter}
            cleanFilter={this.cleanFilter}
          />
          <ContactList
            filter={filter}
            onChange={this.changeFilter}
            visibleContact={visibleContact}
            deleteContact={this.dedeleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
