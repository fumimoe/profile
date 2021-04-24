import React from "react";
import { Buttons } from "../button/Button";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import PersonIcon from "@material-ui/icons/Person";
import SendIcon from "@material-ui/icons/Send";
import HomeIcon from "@material-ui/icons/Home";
import styles from "./LeftDisplay.module.css";
import { Link } from "react-router-dom";
import useMedia from "use-media";
import Header from "../Header/Header";

const LeftDisplay: React.FC = () => {
  const isWide = useMedia({ minWidth: "1200px" });

  return (
    <div>
      {isWide ? (
        <>
        
          <div className={styles.flex_top}>
            <div className={styles.button1}>
              <label>
                <Link to="/" className={styles.title}>
                  <Buttons
                    title={"ホーム"}
                    icon={<HomeIcon style={{ fontSize: 40 }} />}
                  />
                </Link>
              </label>
            </div>

            <div className={styles.button2}>
              <label>
                <Link to="/skill" className={styles.title}>
                  <Buttons
                    title={"スキル"}
                    icon={<CreateNewFolderIcon style={{ fontSize: 40 }} />}
                  />
                </Link>
              </label>
            </div>
          </div>
          <div className={styles.flex_bottom}>
            <div className={styles.button3}>
              <label>
                <Link to="/Profile" className={styles.title}>
                  <Buttons
                    title={"自己紹介"}
                    icon={<PersonIcon style={{ fontSize: 40 }} />}
                  />
                </Link>
              </label>
            </div>
            <div className={styles.button4}>
              <label>
                <Link to="/contact" className={styles.title}>
                  <Buttons
                    title={"お問い合わせ"}
                    icon={<SendIcon style={{ fontSize: 40 }} />}
                  />
                </Link>
              </label>
            </div>
          </div>{" "}
        </>
      ) : (
        <>
          <Header />
        </>
      )}
    </div>
  );
};

export default LeftDisplay;
