import React from 'react'
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/login" component />
                <Route path="/" />
            </Switch>
        </>
    );
};

export default App;