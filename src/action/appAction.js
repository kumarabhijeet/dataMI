export const submitImeiData = (data)=>{
    return (dispatch)=>{
        fetch(`https://api-dev.reachmobile.com/v0/imei/info/${data}`)
        .then((res)=>res.json())
        .then((finalRes)=>{
        if(finalRes.status==="SUCCESS"){
            alert("Data submitted successfully");
            dispatch({
                type:'SUBMIT_IMEI_DATA_SUCCESS',
                payload:finalRes
                })
        }
        else{
            dispatch({
                type:'SUBMIT_IMEI_DATA_FAILURE',
                payload:finalRes
                })
        }
        })
        .catch((err)=>{
            console.log("error",err);
        })
 
    }

}
