
import axios from 'axios'
import { toast } from 'react-toastify'
const backendUrl  = import.meta.env.VITE_BACKEND_URL
export const Create = async(productName, productCode, image, unitPrice, qty, totalPrice)=>{
    const postBody = {
        productName: productName,
         productCode:productCode,
         image:image,
         unitPrice:unitPrice,
         qty:qty,
         totalPrice:totalPrice
         
 }
 
 try {

   const response =  await axios.post(backendUrl + "/api/v1/createProduct", postBody)
   if(response.status === 201){
    return true
   }else{
    return false
   }
    
 } catch (err) {
    console.log(err);
      toast.error(err.message)
 }

}

export const Read = async ()=>{
    
    try {
        const response = await axios.get(backendUrl + "/api/v1/readProduct")
        if(response.data.success){
            return response.data["product"]
        }else{
            return false
        }

    } catch (err) {
        console.log(err);
        toast.error(err.message)
    }

}

export const ReadById = async (id)=>{
    
    try {
        const response = await axios.get(backendUrl + `/api/v1/readProductById/${id}`)
        if(response.data.success){
            return response.data["product"]
        }else{
            return false
        }

    } catch (err) {
        console.log(err);
        toast.error(err.message)
    }

}

export const Delete = async (id )=>{
   

    try {
            const response = await axios.delete(backendUrl + `/api/v1/removeProduct/${id}`)
                        
            if(response.status === 201){
                return true
            }else{
                return false
            }

    } catch (err) {
        console.log(err);
        toast.error(err.message)
    }

}

export const update = async (id, productName, productCode, image, unitPrice, qty, totalPrice)=>{

    const postBody = {
        productName: productName,
         productCode:productCode,
         image:image,
         unitPrice:unitPrice,
         qty:qty,
         totalPrice:totalPrice
         
 }
   
    try {
        const response = await axios.post(backendUrl + `/api/v1/updateProduct/${id}`, postBody )
        console.log(response);
        
        if(response.status === 200){
            return true
        }else{
            return false
        }
        
    } catch (err) {
        console.log(err);
        toast.error(err.message)
    }

}