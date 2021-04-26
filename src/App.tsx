import React from "react";
import styles from "./App.module.css";
import LeftDisplay from "./Pages/LeftDisplay/LeftDisplay";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ContactForm } from "./Pages/Form/Form";
import Top from "./Pages/Top/Top";
import Profile from "./Pages/Profile/Profile";
import SkillProduct from "./Pages/SkillProduct/SkillProduct";
import useMedia from "use-media";

const App: React.FC = () => {
  const isWide = useMedia({ minWidth: "1200px" });

  return (
    <div>
      <div className={styles.App}>
        <Router>
          <div className={styles.app_left}>
            <div className={styles.left_container}>
              <LeftDisplay />
            </div>
          </div>
          <div className={styles.app_right}>
            <div className={styles.app_right_container}>
              <Route exact path="/" component={Top} />
              <Route exact path="/contact" component={ContactForm} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/skill" component={SkillProduct} />
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;
