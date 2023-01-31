import { data } from "autoprefixer";
import axios from "axios";    
                                                         //  axios library to send async requests tahki m3a l back 
import {contactconstantes} from './constantes'

// bch nestaamlou les 3 etats mta3 l constantes 
// dispatch to launch an action and passe it to the reducer 

// action 1 : lister 
export const listercontacts = () => {

    return async dispatch =>{
        dispatch({type:contactconstantes.GET_ALL_CONTACTS_REQUEST})
        try {
            const res = await axios.get('http://127.0.0.1:3000/contact/lister')
                     if (res.status ===200){
                dispatch({
                    type:contactconstantes.GET_ALL_CONTACTS_SUCCESS,
                    payload : {contacts : res.data} 
                })
            }
            // data jdida nhotouha fel payload esmou contacts 

        } catch (error) {
            dispatch({
                type:contactconstantes.GET_ALL_CONTACTS_FAILURE,
                payload : {error : error.response} 
            })

        }
       
    }
}


// action 2 : ajouter 
export const ajoutercontacts =(data)=> {
    return async dispatch => {
        dispatch({type:contactconstantes.ADD_CONTACT_REQUEST})
        try{
            const res = await axios.post('http://127.0.0.1:3000/contact/ajouter' ,data)
            if (res.status ===200){
       dispatch({
           type:contactconstantes.ADD_CONTACT_SUCCESS,
           payload : {createdcontact : res.data} 
       }) 
        }
    }

     catch (error) {
    dispatch({
        type:contactconstantes.ADD_CONTACT_FAILURE,
        payload : {error : error.response} 
    })

     }

  }
} 


// action 3

export const supprimercontact =(id)=> {
    return async dispatch => {
        dispatch({type:contactconstantes.DELETE_CONTACT_REQUEST})
        try{
            
            const res = await axios.get(`http://127.0.0.1:3000/contact/${id}/supprimer`)

            if (res.status ===200){
       dispatch({
           type:contactconstantes.DELETE_CONTACT_SUCCESS,
           payload : {message : res.data} 
       }) 
        }
    }

     catch (error) {
    dispatch({
        type:contactconstantes.DELETE_CONTACT_FAILURE,
        payload : {error : error.response} 
    })

     }

  }
} 

// action 4 : modifier 
export const modifiercontact =(id,data)=> {
    return async dispatch => {
        dispatch({type:contactconstantes.UPDATE_CONTACT_REQUEST})
        try{
            const res = await axios.post(`http://127.0.0.1:3000/contact/${id}/modifier`,data)
            if (res.status ===200){
       dispatch({
           type:contactconstantes.UPDATE_CONTACT_SUCCESS,
           payload : {message : res.data} 
       }) 
        }
    }

     catch (error) {
    dispatch({
        type:contactconstantes.UPDATE_CONTACT_FAILURE,
        payload : {error : error.response} 
    })

     }

  }
} 


