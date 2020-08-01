const db = require('../models/queries')

exports.showItems = (req,res) =>{
    db.Items.getItems()
    .then((items) => {
        res.render('items',{
            items: items
        })
    })
}