import { ListElem } from '../ListElem/ListElem';
import PropTypes from 'prop-types';
import { ListContactsStyle } from './ListContacts.styled';

export const ListContacts = ({ contacts, onDelete }) => {
  return (
    <ListContactsStyle>
      {contacts.map(contact => {
        return (
          <ListElem
            name={contact}
            key={contact.id}
            onDelete={onDelete}
            contact={contact}
          />
        );
      })}
    </ListContactsStyle>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
