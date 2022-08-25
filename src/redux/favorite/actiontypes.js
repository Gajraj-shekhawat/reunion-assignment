export const favoriteActions = {
  REQUEST: "REQUEST_FAVORITE",
  SUCCESS: "SUCCESS_FAVORITE",
  FAILURE: "FAILURE_FAVORITE",
};

export const favoriteActionRequest=()=>({
    type:favoriteActions.REQUEST
})
export const favoriteActionSuccess=(payload)=>({
    type:favoriteActions.SUCCESS,payload
})
export const favoriteActionFailure=()=>({
    type:favoriteActions.REQUEST
})