import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import PersonIcon from "@material-ui/icons/Person";
import SendIcon from "@material-ui/icons/Send";
import HomeIcon from "@material-ui/icons/Home";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: "auto",
  },
  text: {
    textDecoration: "none",
    color: "#555555",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

const HeaderMenus = () => {
  const classes = useStyles();
  const [stateOpen, setStateOpen] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setStateOpen({ ...stateOpen, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["ホーム", "スキル", "プロフィール", "問い合わせ"].map(
          (text, index) => (
            <ListItem button key={text}>
              {index === 0 && (
                <div>
                  <label>
                    <Link to="/">
                      <ListItemIcon>
                        <IconButton>
                          <HomeIcon />
                        </IconButton>
                      </ListItemIcon>
                    </Link>
                  </label>
                </div>
              )}

              {index === 1 && (
                <div>
                  <label>
                    <Link to="/skill">
                      <ListItemIcon>
                        <IconButton>
                          <CreateNewFolderIcon />
                        </IconButton>
                      </ListItemIcon>
                    </Link>
                  </label>
                </div>
              )}
              {index === 2 && (
                <div>
                  <label>
                    <Link to="/Profile">
                      <ListItemIcon>
                        <IconButton>
                          <PersonIcon />
                        </IconButton>
                      </ListItemIcon>
                    </Link>
                  </label>
                </div>
              )}
              {index === 3 && (
                <div>
                  <label>
                    <Link to="/contact">
                      <ListItemIcon>
                        <IconButton>
                          <SendIcon />
                        </IconButton>
                      </ListItemIcon>
                    </Link>
                  </label>
                </div>
              )}

              {index === 0 && (
                <Link to="/" className={clsx(classes.text)}>
                  <ListItemText primary={text} />
                </Link>
              )}
              {index === 1 && (
                <Link to="/skill" className={clsx(classes.text)}>
                  <ListItemText primary={text} />
                </Link>
              )}
              {index === 2 && (
                <Link to="/Profile" className={clsx(classes.text)}>
                  <ListItemText primary={text} />
                </Link>
              )}
              {index === 3 && (
                <Link to="/contact" className={clsx(classes.text)}>
                  <ListItemText primary={text} />
                </Link>
              )}
            </ListItem>
          )
        )}
      </List>

      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Drawer
          anchor="left"
          open={stateOpen["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default HeaderMenus;
