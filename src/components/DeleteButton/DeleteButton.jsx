import React from 'react';
import styles from './DeleteButton.module.css';
export default function DeleteButton({ contact, onDelete }) {
  return (
    <button
      type="button"
      onClick={() => onDelete(contact)}
      className={styles.button}
    >
      Delete
    </button>
  );
}
