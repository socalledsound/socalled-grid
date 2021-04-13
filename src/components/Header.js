import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Container, Hidden  } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SideDrawer from './SideDrawer';
// import { Home } from "@material-ui/icons"

const useStyles = makeStyles({
    navbar : {
        backgroundColor : '#333',
        height: '100px',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        justifyContent: 'space-between',
    },
    list : {
        display: 'flex',
        flexDirection: 'row',
       
        marginLeft: 'auto',
    },
    sideDrawer : {
      
    },

    homeLinkText : {
        textDecoration : 'none',
        color : '#aaa',
        marginLeft: '0',
        marginTop : '0.1rem',
    },
    linkText: {
        textDecoration : 'none',
        // textTransform : 'uppercase',
        color : '#aaa',
        marginTop : '0.6rem',
    }
})

const navLinks = [
    { title: 'about', path: '/about'},
    {title : 'contact', path: '/contact'},
]

const Header = () => {
    const classes = useStyles();
    console.log(classes.container);
    return (
        <AppBar position = "static" className={classes.navbar}>
            <Toolbar>
                <Link to="/" className={classes.homeLinkText}>
                    <Typography className={classes.homeLinkText}>socalledsound</Typography>
                </Link>    
                <Container maxWidth="md" className={classes.container}>
                    {/* <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                    </IconButton> */}
                    <Hidden xsDown>
                    <List component="nav" aria-labelledby="main navigation" className={classes.list}>
                        {navLinks.map(({ title, path }) => (
                        <Link to={path} key={title} className={classes.linkText} >
                            <ListItem button>
                            <ListItemText primary={title} />
                            </ListItem>
                        </Link>
                        ))}
                    </List>
                    </Hidden>
                    <Hidden smUp>
                        <SideDrawer className={classes.sideDrawer} navLinks={navLinks}/>
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
export default Header