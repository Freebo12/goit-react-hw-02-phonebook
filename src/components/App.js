import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ListContacts } from './ListContacts/ListContacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const { contacts } = this.state;

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${contact.name} Is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactid => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactid
        ),
      };
    });
  };

  render() {
    const visibleContacts = this.getContacts();
    return (
      <>
        <Section title={'Phonebook'}>
          <PhoneBook onSabmit={this.addContact} />
        </Section>

        <Section title={'Contacts'}>
          <SearchFilter onChange={this.changeFilter} />
          <ListContacts
            contacts={visibleContacts}
            onDelete={this.deleteContact}
            id={this.state.id}
          />
        </Section>
      </>
    );
  }
}
