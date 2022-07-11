
export const actionTypes = {
    CALL_PLAYERS:"Player/call",
    CREATE_PLAYERS:"Player/create",
    UPDATE_PLAYERS:"Player/update",
    DELETE_PLAYERS:"Player/delete"

};
//dispatch 첫번째 인자값 type: 필수, 두번째 인자값 옵션, 온다면 데이터를 날리다
export function callInitialData(props){
    return dispatch =>{
        const playerData =props.data
      console.log("playerData",playerData);
        return dispatch({type:actionTypes.CALL_PLAYERS, playerData});
    };
}



export function createContact(contact) {
    return dispatch => {
        return dispatch({ type: actionTypes.CREATE_CONTACT, contact });
    };
}
//save 버튼누르면 호출당한다
export function updateContact(contact, index) {
    console.log("contact",{contact});
    return dispatch => {
        return dispatch({ type: actionTypes.UPDATE_CONTACT, contact, index });
    };
}
export function deleteContact(index) {
    return dispatch => {
        return dispatch({ type: actionTypes.DELETE_CONTACT, index });
    };
}
