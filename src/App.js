import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GridContainer from './components/GridContainer';
import About from './components/About';


const App = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={GridContainer}/>
            <Route path="/about" component={About}/>
            {/* <Redirect to="/" /> */}
        </Switch>
     );
}
 
export default App;
