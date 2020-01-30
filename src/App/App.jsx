import React, {Component} from 'react'
import {Router, Route} from 'react-router-dom'
import {alertActions} from "../actions";
import {HomePage} from "../containers/HomePage";
import {Login} from "../containers/LoginPage";
import {connect} from 'react-redux'
import {PrivateRoute} from "../components";
import {history} from "../utils";


class App extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });

    }

    render() {

        const {alert} = this.props;

        return (
            <Router history={history}>
                <div>
                    <PrivateRoute exact path='/' component={HomePage}/>
                    <Route path='login' component={Login}/>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};

