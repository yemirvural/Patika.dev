import React from 'react'
import styles from './styles.module.css';
import { GoChevronDown } from "react-icons/go";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.inputContainer}>
        <input
          value={"Istanbul"}
          type="text"
          name=""
          id=""
        />
        <GoChevronDown/>
      </div>
    </div>
  )
}

export default Header