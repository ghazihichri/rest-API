const express = require ("express")


const ContactRouter = express.Router()


const {addContact,getContact,deleteContact,updateContact,getoneContact} = require("../Controllers/Contact")

ContactRouter.post('/addContact',addContact)

ContactRouter.get('/getContact',getContact)

ContactRouter.delete('/deleteContact/:id',deleteContact)

ContactRouter.put('/updateContact/:id',updateContact)

ContactRouter.get('/getoneContact/:id',getoneContact)

module.exports = ContactRouter