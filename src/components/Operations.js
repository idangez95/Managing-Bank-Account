import React, { Component} from 'react';

class Operations extends Component {
    constructor() {
        super();
        this.state = {
            amountInput: 0,
            vendorInput: "",
            categoryInput: ""
        }
    }

    handlerInputs = (event) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
        [name]: value
        })
    }

    addDeposit = () =>{
        let amount = parseInt(this.state.amountInput)
        let vendor = this.state.vendorInput
        let category = this.state.categoryInput

        const newTransaction = {amount, vendor, category}
        this.props.postTransaction(newTransaction)
    }

    addWithdraw = () =>{
        let amount = this.state.amountInput * (-1)
        let vendor = this.state.vendorInput
        let category = this.state.categoryInput

        const newTransaction = {amount, vendor, category}
        this.props.postTransaction(newTransaction)
    }

    render(){
        return(
            <div className="operations">
                <div className="operations-title">
                    Please write down your next operation
                </div>
                <div className="operations-amount">
                    Amount: <input onChange={this.handlerInputs} name="amountInput" type="number" />
                </div>

                <div className="operations-vendor">
                    Vendor: <input onChange={this.handlerInputs} name="vendorInput" type="text" />
                </div>

                <div className="operations-category">
                    Category: <input onChange={this.handlerInputs} name="categoryInput" type="text" />
                </div>

                <button className="operations-withdraw" onClick={this.addWithdraw}>Withdraw</button>
                <button className="operations-deposit" onClick={this.addDeposit}>Deposit</button>
            </div>
        )
    }
}


export default Operations;