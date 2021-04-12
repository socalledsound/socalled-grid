import React from 'react';
import { AppBar, Toolbar } from "@material-ui/core"

const navLinks = [
    { title : 'socalledsound', path: '/'},
    { title: 'about', path: '/about'},
    {title : 'contact', path: '/contact'},
]

const Header = () => {
    return (
        <AppBar position = "static">
            <Toolbar>hi</Toolbar>
        </AppBar>
    )
}
export default Header