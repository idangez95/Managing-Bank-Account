import React, { Component } from 'react';

class Transaction extends Component {

    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }

    render() {
        let transaction = this.props.transaction

        return (
            <div className="transactions">
                {transaction.amount >= 0 ?
                    <div className="transaction">
                        <div className="transaction-category">
                            Category: {transaction.category}
                        </div>
                        <div className="transaction-vendor">
                            Vendor: {transaction.vendor}
                        </div>
                        <div className="transaction-amount">
                            Amount: <span className="positive-amount">{transaction.amount}</span>
                        </div>
                        <i onClick={this.deleteTransaction} class="fas fa-trash delete-button"></i>
                    </div> :
                    <div className="transaction">
                        <div className="transaction-category">
                            Category: {transaction.category}
                        </div>
                        <div className="transaction-vendor">
                            Vendor: {transaction.vendor}
                        </div>
                        <div className="transaction-amount">
                            Amount: <span className="negative-amount">{transaction.amount}</span> 
                        </div>
                    <i onClick={this.deleteTransaction} class="fas fa-trash delete-button"></i>
                    </div>
                }
            </div>
        )
    }
}


export default Transaction;