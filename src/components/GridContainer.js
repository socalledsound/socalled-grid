import React, { Component } from 'react'
import Grid from './Grid';

const gridSettings = {
    "grid-gap": false,
    "grid-template-columns": false,
}

const GridContainer = () => {

    return (
        <div>
          <Grid settings={gridSettings} />
          
        </div>
    )
}

export default GridContainer