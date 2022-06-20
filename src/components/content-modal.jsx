import React from "react";
import * as styles from "./content-modal.module.scss";

function ContentModal({ children }) {
  return (
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.window}>
            {children}
          </div>
        </div>
        <div className={styles.tint}></div>
      </div>
  )
}

export default ContentModal;