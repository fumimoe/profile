import React from "react";
import styles from "./Card.module.css";

type product = {
  img: string;
  title: string;
  message: string;
};
const CardDetail: React.FC<product> = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.pictureArea}>
          <img className={styles.img} src={props.img} alt="" />
        </div>
        <div className={styles.messageArea}>
          <h2 className={styles.title}>{props.title}</h2>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
