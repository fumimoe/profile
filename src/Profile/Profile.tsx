import React, { useState } from "react";
import styles from "./Profile.module.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      "& > *": {
        margin: theme.spacing(3),
      },
    },

    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  })
);

type profile_message ={
  message: string;
  title:string;
}

const Profile:React.FC<profile_message> = () => {
  const [message, setMessage] = useState(
    "エンジニア転職目指してReactを学習中！\n趣味：筋トレ👊・サウナ♨️・ランニング🏃‍♂️\n"
  );
  const classes = useStyles();
  return (
    <div className={styles.root_container}>
      <div className={classes.root}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.large}
        />
      </div>
      <div className={styles.message_container}>
        <div className={styles.name_title}>
          <p>Oshikiri Fumiya</p>
        </div>
        
          <p className={styles.message}>
              {message.split('\n').map((str,index)=>(
                   <React.Fragment key={index}>{str}<br /></React.Fragment>
              ))}
          </p>
          <div className={styles.icons_container}>
              <Tooltip title="Twitter"><a href="https://twitter.com/home" target="_blank"><IconButton><TwitterIcon style={{ fontSize: 30 }}/></IconButton></a></Tooltip>
              <Tooltip title="GitHub"><a href="https://github.com/fumimoe" ><IconButton><GitHubIcon style={{ fontSize: 30 }}/></IconButton></a></Tooltip>
              <Tooltip title="プロフィール編集"><IconButton ><CreateIcon style={{ fontSize: 30 }}/></IconButton></Tooltip>
          </div>
      </div>
    </div>
  );
};

export default Profile;
