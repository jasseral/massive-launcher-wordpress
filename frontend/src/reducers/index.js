import { UPDATE_BOARD_VALUES, UPDATE_UPLOAD_VALUES,UPDATE_SELECTED_TAB } from "../constants/action-types";
import initialState from "../constants/initialState"


const rootReducer = (state = initialState() ,action) => {
  
  switch(action.type){
    
    
    case UPDATE_BOARD_VALUES:
    var Board = {
      selected : action.payload.idx,
      resource : action.payload.resource,
      status : action.payload.status 
    }
    return{
      ...state,
      boardComponent : Board
    }
    
    case UPDATE_UPLOAD_VALUES:
    return{
      ...state,
      uploadComponent : action.payload
    }

    case UPDATE_SELECTED_TAB:
      return{
        ...state,
        selectedTab : action.payload
      }
    
    default:
    return state
  }
  
}

export default rootReducer