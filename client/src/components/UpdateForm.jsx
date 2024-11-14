import { useEffect, useRef } from "react";
import { ErrorToast, isEmpty, SuccessToast } from "../helper/ValidationHelper";
import { ReadById, update } from "../apiServices/CrudServices";
import Button from "./common/Button";
import FullScreenLoader from "./common/FullScreenLoader";
import PropTypes from "prop-types";

const UpdateForm = ({id}) => {
    let productName,
    produtCode,
    image,
    unitPrice,
    qty,
    loader,
    totalPrice = useRef();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    let product_name = productName.value;
    let product_Code = produtCode.value;
    let product_image = image.value;
    let product_unitPrice = unitPrice.value;
    let product_qty = qty.value;
    let product_totalPrice = totalPrice.value;

    if (isEmpty(product_name)) {
      ErrorToast("Product Name is required");
    } else if (isEmpty(product_Code)) {
      ErrorToast("Product Code is required");
    } else if (isEmpty(product_image)) {
      ErrorToast("Product Image is required");
    } else if (isEmpty(product_unitPrice)) {
      ErrorToast("Product Unit price is required");
    } else if (isEmpty(product_qty)) {
      ErrorToast("Product qty is required");
    } else if (isEmpty(product_totalPrice)) {
      ErrorToast("Product total price is required");
    } else {
      loader.classList.remove("hidden")
     const result = await update(
        id,
        product_name,
        product_Code,
        product_image,
        product_unitPrice,
        product_qty,
        product_totalPrice
      );
      console.log(result);
      
      if(result === true){
        SuccessToast("Successfully product Updated");
        productName.value = "";
        produtCode.value = "";
        image.value = "";
        unitPrice.value = "";
        qty.value = "";
        totalPrice.value = "";
        loader.classList.add("hidden")

      }else{
        ErrorToast("Request Faild try again")
      }
      
    }
  };

  useEffect(()=>{
      fetchDataById(id)
    },[id])

  async function fetchDataById(id) {
      const response = await ReadById(id)
      console.log(response);
      
      productName.value = response?.productName,
    produtCode.value = response?.productCode,
    image.value = response?.image,
    unitPrice.value = response?.unitPrice,
    qty.value = response?.qty,
    totalPrice.value = response?.totalPrice
    }




  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-20 py-14 bg-slate-400 rounded-sm px-12 text-start">
          <div className="flex flex-col">
            <label htmlFor="">Product Name</label>
            <input
              ref={(input) => (productName = input)}
              className=" border-slate-800 border-[1px] py-2 px-2 rounded-sm"
              type="text"
              name="pname"
              placeholder="enter your product name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Product Code</label>
            <input
              ref={(input) => (produtCode = input)}
              type="text"
              className=" border-slate-800 border-[1px] py-2 px-2 rounded-sm"
              name="pcode"
              placeholder="enter your product name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Image</label>
            <input
              ref={(input) => (image = input)}
              type="text"
              className=" border-slate-800 border-[1px] py-2 px-2 rounded-sm"
              name="image"
              placeholder="enter your product name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Unit Price</label>
            <input
              ref={(input) => (unitPrice = input)}
              type="text"
              className=" border-slate-800 border-[1px] py-2 px-2 rounded-sm"
              name="uprice"
              placeholder="enter your product name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Qty</label>
            <input
              ref={(input) => (qty = input)}
              type="text"
              className=" border-slate-800 border-[1px] py-2 px-2 rounded-sm"
              name="qty"
              placeholder="enter your product name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Total Price</label>
            <input
              ref={(input) => (totalPrice = input)}
              type="text"
              className=" border-slate-800 border-[1px] py-2 px-2 rounded-sm"
              name="tprice"
              placeholder="enter your product name"
            />
          </div>
        </div>
        <Button handleData={handleSubmit} label={"Update"} />
      </form>
      <div ref={(div)=>loader = div} className=" hidden">
        <FullScreenLoader/>
      </div>
    </div>
  );
};

UpdateForm.propTypes={
    id:PropTypes.string
}

export default UpdateForm;