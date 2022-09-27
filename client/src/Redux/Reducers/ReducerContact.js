import { GETONECONTACT, GET_CONTACTS } from "../ActionsTypes/ContactType"

const initialState={
    Contacts:[],
    contact:{}
}

const ReducerContact=(state=initialState,action)=>{
    switch (action.type) {
       case GET_CONTACTS : return {...state,Contacts : action.payload}
       case GETONECONTACT : return {...state,contact : action.payload}
        default : return state
            
    }

}
export default ReducerContact