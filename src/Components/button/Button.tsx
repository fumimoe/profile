import React from "react";
import styles from "./Button.module.css";

type Props = {
  icon: any;
  title: string;
};

export const Buttons: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className={styles.button}>
      <p className={styles.button_title}>{title}</p>
      <div className={styles.button_icon}>{icon}</div>
    </div>
  );
};
