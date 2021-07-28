import React, { Component } from "react";
import axios from "axios";

export class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedOut: false,
        }

        this.initialState = this.state
    }


    logoutHandler = () => {
        axios
            .post('http://127.0.0.1:8000/account/logout/', "", {
                headers: {
                    'Authorization': `Token ${sessionStorage.getItem("userToken")}`
                }
            })
            .then(response => {
                alert("You are Logged out !");
                this.setState({
                    loggedOut: true
                });

            })
            .catch(error => {
                alert("You are not Logged out !");
                this.setState({
                    loggedOut: false
                });
            })
    }

    componentDidMount() {
        this.logoutHandler()
    }


    render() {

        return (
            <div>
                You are Logged out!!!
            </div>
        )


    }




}