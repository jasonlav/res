import React from "react";
import * as styles from "./powerword.module.scss";

function Powerword({ word }) {
  return (
      <span className={styles.root}>
        <span className={styles.placeholder}>{word.__placeholder}</span>
        <span className={styles.tip}>
          <span className={styles.title}>{word.title}</span>
          <span className={styles.description}>{word.description}</span>
        </span>
      </span>
  )
}

export default Powerword;