import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderMenus from './HeaderMenus';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
      menuBar: {
        backgroundColor : "#fff",
        color : "#444",
      },
      toolBar: {
        margin : "0 auto",
        maxWidth : "85%",
        width : "100%",
        boxSizing:'border-box'
      },
      iconsButtons : {
          margin : "0 0 0 auto",
          
      }
})

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
            <AppBar position="fixed" className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>
                        <div className={classes.iconsButtons}>
                            <HeaderMenus/>
                        </div>
                    
                </Toolbar>
            </AppBar>
        </div>
        </div>
    )
}

export default Header
