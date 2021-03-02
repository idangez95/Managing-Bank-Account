import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <div className="navBar-container">
                <div className="navBar-left-content">
                    <Link to="/">Home</Link>
                    <Link to="/transactions">Transactions</Link>
                    <Link to="/operations">Operations</Link>
                </div>
                <div className="navBar-right-content" >
                    <img src="bank.jpg" alt="" />
                </div>
            </div>
        )
    }
}

export default NavBar