const INITIAL_STATE={
    imeiStoreData:[],
    error:false,
}
const AppReducer = (state=INITIAL_STATE,action)=>{
switch(action.type){
    case 'SUBMIT_IMEI_DATA_SUCCESS':return{
        ...state,
        imeiStoreData:action.payload,
        error:false
    }
    case 'SUBMIT_IMEI_DATA_FAILURE':return{
        ...state,
        imeiStoreData:action.payload,
        error:true
    }
    default:return state;
}
}
export default AppReducer;