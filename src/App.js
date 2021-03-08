import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Operations from './components/Operations'
import Transactions from './components/Transactions'
import Transaction from './components/Transaction'
import axios from 'axios'
import NavBar from './components/NavBar'
import Charts from './components/Charts'


class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      categories: []
    }
  }


  async componentDidMount() {
    const transactions = await this.getTransactions()
    const categories = await this.getCategoriesFromDB()
    this.setState({
      transactions: transactions.data,
      categories: categories.data
    })
  }

  async getTransactions() {
    return await axios.get("/transactions")
  }

  async getCategoriesFromDB() {
    return await axios.get("/categories")
  }

  postTransaction = async (newTransaction) => {
    const response = await axios.post("/transaction", newTransaction)
    this.setState({ transactions: response.data })
  }

  deleteTransaction = async (transactionId) => {
    const response = await axios.delete(`/transaction/${transactionId}`)
    this.setState({ transactions: response.data })
  }

  balance() {
    const transactions = this.state.transactions
    let sum = 0
    for (let i in transactions) {
      sum += transactions[i].amount
    }
    return sum
  }

  render() {
    let transactions = this.state.transactions
    return (
      <Router>
        <div>
          <NavBar />
          <div className="balance">
            {this.balance() >= 500 ?
              <div className="balance" style={{ color: "green" }}>
                Bank Acount Balance: {this.balance()}$
              </div> :
              <div className="balance" style={{ color: "red" }}>
                Bank Acount Balance: {this.balance()}$
              </div>
            }
          </div>
        </div>

        <Route path="/" exact render={() => <Charts categories={this.state.categories} />} />

        <Route path="/operations" exact render={() =>
          <Operations postTransaction={this.postTransaction} transaction={transactions}/>} />

        <Route path="/transactions" exact render={() =>
          <Transactions deleteTransaction={this.deleteTransaction} transactions={transactions} />} />
      </Router>
    );
  }
}

export default App;
