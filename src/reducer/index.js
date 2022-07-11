import { actionTypes } from "../actions/callPlayer";

const initialState={
    playerList:[]
};

export default function rootReducer(state=initialState,action){

  switch(action.type){
    case actionTypes.CALL_PLAYERS :
   
        return{
            ...state,playerList:[...state.playerList,[...action.playerData]]
        }
    default: return state;
  }
}



