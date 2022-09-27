import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "../Redux/Actions/ContactAction"
import CardContact from "./CardContact"
const ListContact =()=>{
    const Contacts = useSelector (state=>state.ReducerContact.Contacts)
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(getContacts())
    },[])
    return(
        <div className="List">
        {
            Contacts.map(contact=> < CardContact key={contact._id} contact={contact}/>)
        }
        </div>
    )
}
export default ListContact