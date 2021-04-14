import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GridContainer from './components/GridContainer';
import About from './components/About';
import BirdsApp from './projects/birds/App';


const App = () => {
    return ( 
        <Switch>
            <Route exact path="/" component={GridContainer}/>
            <Route path="/about" component={About}/>
            <Route path="/birds" component={BirdsApp}/>
            {/* <Redirect to="/" /> */}
        </Switch>
     );
}
 
export default App;
