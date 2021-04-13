import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { IconButton, List, ListItem,ListItemText, Drawer } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Menu } from "@material-ui/icons"


const useStyles = makeStyles({
    list: {
        width: 250,
      },
      linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `black`,
      },
})

const SideDrawer = ({navLinks}) => {
    const classes = useStyles(); 
    const [state, setState] = useState({right : false})

    const toggleDrawer = (anchor, open) => event => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return
        }
        setState({ [anchor]: open })
      }
      const sideDrawerList = anchor => (
        <div
          className={classes.list} /*Add this */
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List component="nav">
            {navLinks.map(({ title, path }) => (
              <Link to={path} key={title} className={classes.linkText} /*Add this*/>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      )

    return ( 
        <React.Fragment>
            <IconButton 
                edge="start" 
                aria-label="menu" 
                style={{marginLeft: 'auto'}}
                onClick={toggleDrawer("right", true)}
                >
                <Menu />
            </IconButton>
            <Drawer
                anchor="right"
                open={state.right}
                onOpen={toggleDrawer("right", true)}
                onClose={toggleDrawer("right", false)}
            >
                {sideDrawerList("right")}
            </Drawer>
        </React.Fragment>
     );
}
 
export default SideDrawer;