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
            <div>
                <div>
                    Amount: <input onChange={this.handlerInputs} name="amountInput" type="number" />
                </div>

                <div>
                    Vendor: <input onChange={this.handlerInputs} name="vendorInput" type="text" />
                </div>

                <div>
                    Category: <input onChange={this.handlerInputs} name="categoryInput" type="text" />
                </div>

                <button onClick={this.addWithdraw}>Withdraw</button> <button onClick={this.addDeposit}>Deposit</button>
            </div>
            

        )
    }
}


export default Operations;