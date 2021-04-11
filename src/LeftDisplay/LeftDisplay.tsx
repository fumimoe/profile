import React from "react";
import { Buttons } from "../button/Button";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import PersonIcon from "@material-ui/icons/Person";
import SendIcon from "@material-ui/icons/Send";
// import Typed from 'react-typed';
import HomeIcon from "@material-ui/icons/Home";
import styles from "./LeftDisplay.module.css";
import { Link } from "react-router-dom";

const LeftDisplay: React.FC = () => {
  return (
    <>
      <div className={styles.flex_top}>
        <div className={styles.button1}>
          <label>
            <Link to="/" className={styles.title}>
              <Buttons title={"ホーム1"} icon={<HomeIcon />} />
            </Link>
          </label>
        </div>

        <div className={styles.button2}>
          <Buttons title={"ホーム2"} icon={<CreateNewFolderIcon />} />
        </div>
      </div>
      <div className={styles.flex_bottom}>
        <div className={styles.button3}>
        <label>
            <Link to="/Profile" className={styles.title}>
              <Buttons title={"自己紹介"} icon={<PersonIcon />} />
            </Link>
          </label>
        </div>
        <div className={styles.button4}>
        <label>
            <Link to="/contact" className={styles.title}>
              <Buttons title={"お問い合わせ"} icon={<SendIcon />} />
            </Link>
          </label>
        </div>
      </div>
    </>
  );
};

export default LeftDisplay;
