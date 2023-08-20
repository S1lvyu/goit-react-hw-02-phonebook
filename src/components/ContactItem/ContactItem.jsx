import React from 'react';
import DeleteButton from 'components/DeleteButton/DeleteButton';
import styles from './ContactItem.module.css';
export default function ContactItem({ contact, onDelete }) {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{contact.name}:</span> {contact.number}
      <DeleteButton contact={contact} onDelete={onDelete} />
    </li>
  );
}
