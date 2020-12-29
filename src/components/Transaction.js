import React, { Component} from 'react';
import Button from '@material-ui/core/Button';


class Transaction extends Component {

    deleteTransaction = () => {
        this.props.deleteTransaction(this.props.transaction._id)
    }
    
    render(){
        let transaction = this.props.transaction
    
        return(
            <div>
                {transaction.amount >= 0 ?
                    <div className="positiveAmount">
                        category: {transaction.category} vendor: {transaction.vendor} amount: {transaction.amount}
                        <Button className="deleteButton" variant="contained" color="primary" onClick={this.deleteTransaction}>
                            Delete
                        </Button>
                        <p></p>
                    </div>: <div className="negativeAmount">
                        category: {transaction.category} vendor: {transaction.vendor} amount: {transaction.amount}
                        <Button className="deleteButton" variant="contained" color="primary" onClick={this.deleteTransaction}>
                            Delete
                        </Button>
                        <p></p>
                    </div>    
                }

                
            </div>
        )
    }
}


export default Transaction;