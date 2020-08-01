const db = require('../models/queries')

exports.showItems = (req,res) =>{
    db.Items.getItems()
    .then((items) => {
        res.render('items',{
            items: items
        })
    })
}

exports.newItems = (req,res) =>{
    res.render('new.ejs')
}

exports.createItems = (req,res) =>{
    db.Items.createItems(req.body.itemName)
    .then(() => {
        res.redirect('/items');
    })
}

exports.deleteItems = (req,res) =>{
    db.Items.deleteItems(req.params.id)
    .then(() => {
        res.redirect('/items');
    })
}