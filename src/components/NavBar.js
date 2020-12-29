import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class NavBar extends Component {

    render() {

        return (
            <div class="navBar">
                <Link to="/">Home</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/operations">Operations</Link>
                <Link to="/categories">Category</Link>
            </div>
        )
    }
}

export default NavBar