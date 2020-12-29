const express = require("express")
const router = express.Router()
const Transaction = require("../models/transaction")

router.get('/transactions', async (req, res) => {
    let transaction = await Transaction.find({})
    res.send(transaction)
})

router.post('/transaction',async (req, res) => {
    let transaction = req.body
    let addTransaction = new Transaction(transaction)
    await addTransaction.save()
    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.delete('/transaction/:id', async (req, res) => {
    const { id } = req.params
    await Transaction.findByIdAndDelete(id)

    let transactions = await Transaction.find({})
    res.send(transactions)
})

router.get('/categories', async (req, res) =>{
    Transaction.aggregate([
        {
            $group: {
                _id:"$category",
                totalAmount: {$sum:"$amount"}
            }
        }
    ]).exec((error,response) => res.send(response))
})


module.exports = router