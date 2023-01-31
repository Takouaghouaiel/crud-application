import { contactconstantes } from "../action/constantes";
// njib les 3 etats mta3 l action eli hajetna biha 

const initialState ={
    contacts:[], 
    error : null,
    createdc : {},
    messages : {},
    updatedc : {}
}


const fn= (state = initialState , action)=>{
    switch (action.type){

    //GET ALL CONTACTS  

        case contactconstantes.GET_ALL_CONTACTS_REQUEST :
            state={
                ...state
            }
            break ;
        case contactconstantes.GET_ALL_CONTACTS_SUCCESS :
            state={
                ...state,                                                                      
                contacts : action.payload.contacts
                // action yo9sed biha type l'état
            }
            break ;
            case contactconstantes.GET_ALL_CONTACTS_FAILURE :
            state={
                ...state,
                error : action.payload.error
            }
            break ;

    // ADD CONTACTS 

        case contactconstantes.ADD_CONTACT_REQUEST :
            state={
                ...state,
            }
            break ;
        case contactconstantes.ADD_CONTACT_SUCCESS:
            state={
                ...state,
                createdc : action.payload.createdcontact
            }
            break ;
        case contactconstantes.ADD_CONTACT_FAILURE :
            state={
                ...state,
                error : action.payload.error
            }
            break ;

     // DELETE CONTACTS 

     case contactconstantes.DELETE_CONTACT_REQUEST :
        state={
            ...state,
        }
        break ;
    case contactconstantes.DELETE_CONTACT_SUCCESS:
        state={
            ...state,
            messages : action.payload.message
        }
        break ;
    case contactconstantes.DELETE_CONTACT_FAILURE :
        state={
            ...state,
            error : action.payload.error
        }
        break ;  
        
     // Update CONTACTS 

     case contactconstantes.UPDATE_CONTACT_REQUEST :
        state={
            ...state,
        }
        break ;
    case contactconstantes.UPDATE_CONTACT_SUCCESS:
        state={
            ...state,
            updatedc : action.payload.message
        }
        break ;
    case contactconstantes.UPDATE_CONTACT_FAILURE :
        state={
            ...state,
            error : action.payload.error
        }
        break ;

            
            
            


    }
    return state ;
};
export default fn ;
