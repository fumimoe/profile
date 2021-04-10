import React from "react";
import styles from "./App.module.css";
import LeftDisplay from "./LeftDisplay/LeftDisplay";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContactForm } from "./Form/Form";
import Profile from "./Profile/Profile";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.app_left}>
          <div className={styles.left_container}>
            <LeftDisplay />
          </div>
        </div>
        <div className={styles.app_right}>
          <div className={styles.app_right_container}>
            <Route exact path="/" component={Profile} />
            <Route exact path="/contact" component={ContactForm} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
