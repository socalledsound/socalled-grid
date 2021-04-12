import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, AppBar, Toolbar, IconButton, List, ListItem, ListItemText  } from "@material-ui/core"
import { Home } from "@material-ui/icons"

const navLinks = [
    { title : 'socalledsound', path: '/'},
    { title: 'about', path: '/about'},
    {title : 'contact', path: '/contact'},
]

const Header = () => {
    return (
        <AppBar position = "static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home">
                    <Home fontSize="large" />
                </IconButton>
                <List component="nav" aria-labelledby="main navigation">
                    {navLinks.map(({ title, path }) => (
                    <Link to={path} key={title}>
                        <ListItem button>
                        <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}
export default Header