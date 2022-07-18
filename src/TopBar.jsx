import React from 'react';
import { AppBar, Typography } from '@mui/material';
import "./App.css"

const TopBar = () => {
    return (
      <AppBar position="sticky" className="topBar">
        <Typography variant="h3" className="appTitle">Jenn's Christmas List</Typography>
      </AppBar>

    )
};

export default TopBar;