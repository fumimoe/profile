import React from 'react'
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import PersonIcon from "@material-ui/icons/Person";
import SendIcon from "@material-ui/icons/Send";
import HomeIcon from "@material-ui/icons/Home";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const HeaderMenuList = () => {
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
            <label>

            <Link to="/" >
            <ListItemIcon>
          <IconButton><HomeIcon/></IconButton>
          </ListItemIcon>
            </Link>
            </label>
          
          <ListItemText primary="ホーム" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <label>

<Link to="/skill" >
<ListItemIcon>
<IconButton><HomeIcon/></IconButton>
</ListItemIcon>
</Link>
</label>
          {/* <IconButton><CreateNewFolderIcon/></IconButton>
          </ListItemIcon>
          <ListItemText primary="スキル" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <IconButton><PersonIcon/></IconButton> */}
          </ListItemIcon>
          <ListItemText primary="プロフィール" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <IconButton><SendIcon/></IconButton>
          </ListItemIcon>
          <ListItemText primary="問い合わせ" />
        </ListItem>
      </List>
        <Divider />
        </div>
    )
}

export default HeaderMenuList
