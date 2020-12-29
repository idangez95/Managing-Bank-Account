import React, { Component} from 'react';
import Transaction from './Transaction'


class Transactions extends Component {

    render(){
        let transactions = this.props.transactions
        return (
            <div>
                {transactions.map(t => <Transaction key={t._id} deleteTransaction={this.props.deleteTransaction}
                    transaction={t}/>)}
            </div>
        )
    }
}


export default Transactions;