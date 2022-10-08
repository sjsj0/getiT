import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert2';
window.Swal = swal;


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
                swal.fire("You are Logged out !");
                this.setState({
                    loggedOut: true
                });

            })
            .catch(error => {
                swal.fire("You are not Logged out !");
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