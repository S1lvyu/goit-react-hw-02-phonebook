import React from 'react';
import styles from './Section.module.css';
export default function Section({ children, title }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>{title}</h1>
      {children}
    </div>
  );
}
