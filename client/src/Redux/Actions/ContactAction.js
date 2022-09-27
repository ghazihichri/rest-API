import { GETONECONTACT, GET_CONTACTS } from "../ActionsTypes/ContactType"

import axios from 'axios'

export const  getContacts=()=>async(dispatch)=>{
   try {
    const res = await axios.get('/api/Contact/getContact')
    dispatch ({
        type : GET_CONTACTS,
        payload : res.data.Contacts
    })
   } catch (error) {
    console.log(error)
   }
}

export const addContact = (newContact)=>async(dispatch)=>{
    try {
        await axios.post('/api/Contact/addContact',newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}


export const deleteContact = (id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/Contact/deleteContact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const updateContact =(id,data)=>async(dispatch)=>{
    try {
        await axios.put(`/api/Contact/updateContact/${id}`,data)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}


export const  getOneContact=(id)=>async(dispatch)=>{
    try {
     const res = await axios.get(`/api/Contact/getoneContact/${id}`)
     dispatch ({
         type : GETONECONTACT,
         payload : res.data.contact
     })
    } catch (error) {
     console.log(error)
    }
 }

