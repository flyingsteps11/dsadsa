import React from 'react'
import {userActions} from "../../actions";
import {connect} from 'react-redux';
import r from 'react-router-dom';

const LoginContainer = () => {

    const mapStateToProps = state => ({});

    const mapDispatchToProps = dispatch => ({
    });
};

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps)
)(LoginForm);

class Login extends React.Component {
    constructor(props) {
        super(props);
//        let loggedIn = false;
        //       const token = localStorage.getItem('token');
        //       if (token) loggedIn = true;

        this.props.dispatch(userActions.logout());
        this.state = {
            username: '',
            password: '',
            submitted: false
            //  loggedIn
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        this.setState({submitted: true});
        const {username, password} = this.state;
        const {dispatch} = this.props;

        if (username && password) {
            dispatch(userActions.login(username, password));
        }

    }
}

function mapStateToProps(state) {
    const {loggingIn} =state.auth;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
//export {connectedLogin as Login};