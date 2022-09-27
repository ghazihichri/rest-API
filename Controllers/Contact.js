const Contact = require("../Models/Contact")


exports.addContact=async(req,res)=>{

     try {
         const newContact= new Contact(req.body)
         await newContact.save()
         res.status(200).send({Msg:'contact add',newContact})
     } catch (error) {
         res.status(500).send('contact not add')        
      }

    }


exports.getContact=async(req,res)=>{

     try {
         const Contacts= await Contact.find()
         res.status(200).send({Msg:"List Contact",Contacts})
     } catch (error) {
        res.status(500).send({Msg:'could not get contacts'})        
     }

    }

exports.deleteContact=async(req,res)=>{
        const {id}=req.params
    
        try {
            const delContact=await Contact.findByIdAndDelete(id)
            res.status(200).send({Msg:'contatc delete',delContact})
            } catch (error) {
            res.status(500).send('could not delete contact')
        }
    }

    
exports.updateContact=async(req,res)=>{
        const {id}=req.params
        
        try {
           const updateContact = await Contact.findByIdAndUpdate(id,{$set:req.body})
           res.status(200).send({Msg:'Contact Update',updateContact})
         } catch (error) {
             res.status(500).send('could not update')
         }
     
     
    }
exports.getoneContact=async(req,res)=>{
    const {id}=req.params
    try {
        const contact=await Contact.findById(id)
        res.status(200).send({Msg:'contact',contact})
    } catch (error) {
        res.status(500).send('contact introuvable')
    }
}
