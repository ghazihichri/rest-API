import{Card,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteContact } from '../Redux/Actions/ContactAction'
const CardContact =({contact})=>{
const  dispatch = useDispatch()
const handleDelete =()=>{
  dispatch(deleteContact(contact._id))
}
    return(
        <div className='card'>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
          <Card.Title> Nom : {contact.name}</Card.Title>
          <Card.Text> Age :  {contact.age}</Card.Text>
          <Card.Text> Email : {contact.email}</Card.Text>
          <Link to={`/Edit_Contact/${contact._id}`}> <Button  variant="primary">Edit</Button></Link>
          <Button id='btn' onClick={handleDelete} variant="primary">Delete</Button>
        </Card.Body>
      </Card>
        </div>
    )
}
export default CardContact