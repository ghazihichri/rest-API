import { useState } from 'react'
import {Form , Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addContact } from '../Redux/Actions/ContactAction'
import {useNavigate} from 'react-router-dom'
const AddContact =()=>{
    const [name,setName]= useState('')
    const [age,setAge]= useState(0)
    const [email,setEmail]= useState ('')
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const handleAdd = (e) =>{
        e.preventDefault()
        dispatch(addContact({name,age,email}))
        navigate ('/List_Contact')
    }
    
    return(
        <div>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>age</Form.Label>
        <Form.Control onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
      </Form.Group>

      <Button onClick={(e)=>handleAdd(e)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default AddContact