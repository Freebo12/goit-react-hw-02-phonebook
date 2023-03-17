import PropTypes from 'prop-types';
import { BtnDelete } from './ListElem.stlyed';

export const ListElem = ({ onDelete, contact }) => {
  return (
    <>
      <li>
        {contact.name}:{contact.number}
        <BtnDelete type="button" onClick={() => onDelete(contact.id)}>
          Delete
        </BtnDelete>
      </li>
    </>
  );
};

ListElem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
