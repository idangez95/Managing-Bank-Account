import './App.css';
import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Operations from './components/Operations'
import Transactions from './components/Transactions'
import Transaction from './components/Transaction'
import axios from 'axios'
import NavBar from './components/NavBar'
import Category from './components/Category'


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
    this.setState({ transactions: transactions.data})
  }

  async getTransactions() {
    return await axios.get("http://localhost:4200/transactions")
  }

  postTransaction = async (newTransaction) => {
    const response = await axios.post("http://localhost:4200/transaction", newTransaction)
    this.setState({ transactions: response.data })
  }

  deleteTransaction = async (transactionId) => {
    const response = await axios.delete(`http://localhost:4200/transaction/${transactionId}`)
    this.setState({ transactions: response.data })
  }

  balance(){
    const transactions = this.state.transactions
    let sum = 0
    for(let i in transactions){
      sum += transactions[i].amount
    }
    return sum
  }

  render(){
    let transactions = this.state.transactions
    return (
      <Router>
        <div>
          <NavBar />
        
          {this.balance() >= 500 ? 
            <div className="balance" style={{ color: "green"}}>
              Balance: {this.balance()}
            </div> :
            <div className="balance" style={{ color: "red"}}>
              Balance: {this.balance()}
            </div>
          }

        </div>

        <Route path="/operations" exact render={() => 
          <Operations postTransaction={this.postTransaction} postTransaction={this.postTransaction}
          transaction={transactions} addDeposit={this.addDeposit} addWithdraw={this.addWithdraw}/>}/>

        <Route path="/transactions" exact render={() =>
          <Transactions deleteTransaction={this.deleteTransaction} transactions={transactions} />}/>

        <Route path="/categories" exact render={() => <Category/>}/>
      </Router>
    );
  }
}

export default App;
