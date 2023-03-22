const Orders=require('../models/orders')
const {randomUUID}=require('crypto')

exports.addOrders = async(req, res) => {
    try{
    console.log(req.body)
    const data=await Orders.create({
        id:randomUUID(),
        price:req.body.price,
        dish:req.body.name,
        table:req.body.table

    })
    res.status(201).json({data})
    }catch(err){
        console.log(err)
    }

}

exports.getOrders = (req, res) => {

}

exports.deleteOrders = (req, res) => {

}