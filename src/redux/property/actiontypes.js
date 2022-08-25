export const propertyActions = {
    REQUEST: "REQUEST_PROPERTY",
    SUCCESS: "SUCCESS_PROPERTY",
    FAILURE: "FAILURE_PROPERTY",
  };
  
  export const propertyActionRequest=()=>({
      type:propertyActions.REQUEST
  })
  export const propertyActionSuccess=(payload)=>({
      type:propertyActions.SUCCESS,payload
  })
  export const propertyActionFailure=()=>({
      type:propertyActions.REQUEST
  })