import PropTypes from 'prop-types';
import { ContactsItem } from '../Contacts-item'
import s from './contacts-list.module.css';

export const  ContactsList = ({ contacts, onDeleteBtn })=> {
  const elements = contacts.map(({ id, name, number }) => (
    <ContactsItem
      key={id}
      name={name}
      number={number}
      deleteHandler={() => onDeleteBtn(id)}
    />
  ));
    
  return <ul className={s.list}>{elements}</ul>;
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
