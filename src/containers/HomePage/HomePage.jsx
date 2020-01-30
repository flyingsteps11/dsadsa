import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userActions} from "../../actions";

class HomePage extends React{

    render(){
        const {user, users} = this.props;
        return(
            //vot tut imya ili id zapolnit
            <h1> HEllo user</h1>

        );

    }
}

function mapStateToProps(state) {
    const{users, auth} =state;
    const {user} = auth;
    return{
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};