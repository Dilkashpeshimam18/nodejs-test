const Orders = require('../models/orders')
const { randomUUID } = require('crypto')

exports.addOrders = async (req, res) => {
    try {
        console.log(req.body)
        const data = await Orders.create({
            id: randomUUID(),
            price: req.body.price,
            dish: req.body.name,
            table: req.body.table

        })
        res.status(201).json({ data })
    } catch (err) {
        console.log(err)
    }

}

exports.getOrders = async (req, res) => {
    try {
        const allOrders = await Orders.findAll()
        res.status(200).json({ allOrders })
    } catch (err) {
        console.log(err)
    }
}

exports.deleteOrders = (req, res) => {

}