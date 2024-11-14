import { toast } from "react-toastify";

const isEmpty = (value)=>{
    if(value.length === 0){
        return true
    }else{
        return false
    }

}

const SuccessToast = (msg)=>{
    toast.success(msg, {
        position: "top-center"
      });
}


const ErrorToast = (msg)=>{
    toast.error(msg,{
        position:"bottom-center"
    })
}


export {isEmpty, SuccessToast, ErrorToast

}