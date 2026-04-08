const express = require('express')
const Router = express.Router()
const Contact = require('../models/Contact')

//signup api
// Router.post('/addContact',(req,res)=>{
//     res.status(200).json({
//         msg : 'addContact response'
//     })
// })

// //login api
// Router.get('/getcontact',(req,res)=>{
//     res.status(200).json({
//         msg : 'Edit contact response'
//     })

// Router.post('/add-contact',(req,res)=>{
//    //console.log(req.body)
// const newContact = new Contact({
//     fullName:req.body.name,
//     email:req.body.person_email,
//     phone:req.body.person_phone,
//     address:req.body.add
// })

// newContact.save()
// .then((result)=>{
//     console.log('data saved')
//     res.status(200).json({
//         msg:'data saved'
//     })
// })
// .catch((err)=>{
//     console.log(err)
//     res.status(500).json({
//         error:'something is wrong'
//     })
// })

Router.post('/add-contact', (req, res) => {
    //    console.log(req.body)
    const newContact = new Contact({
        fullName: req.body.name,
        email: req.body.person_email,
        phone: req.body.person_phone,
        address: req.body.add
    })

    newContact.save()
        .then((result) => {
            console.log('data saved')
            res.status(200).json({
                msg: 'data saved'
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                error: 'something is wrong'
            })
        })

})

// get all contact
Router.get('/all-contact', async (req, res) => {
    try {
        const allContact = await Contact.find()
        res.status(200).json({
            contacts: allContact
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
})

// get contact by id
Router.get('/contactById/:Id', async (req, res) => {
    try {
        const id = req.no.params.id

        const data = await Contact.findById(id).select("-id fullname email phone")
        res.status(200).json({
            contact: data
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err

        })
    }

})
//get contact by gender
Router.get('/gender/:g', async (res, res) => {
    try {
        const contact = await Contact.find({ gender: req.params.g })
        res.status(200).json({
            contacr: contact
        })
    }
    catch (err) {

    }
})

//  delete api
Router.delete('/:id', async (req, res) => {
    try{
        await contact
    res.status(200).json({
        msg: 'data delete'
    })
}
catch(err) {
    console.log(err)
    res.status(500).json({
        erroe: err
    })
}
})
// delete all api
Router.delete('/:byGeneder/:gender',async(req,res)=>{
    try{
await Contact.deleteMany('gender:req')
res.status(200).json({
    msg:'delete the all contact'
})
    }
    catch(err){
console.log(err)
res.status(500).json({
    error:err
})

    }
})

module.exports = Router