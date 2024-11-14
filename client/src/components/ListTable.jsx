import { useEffect, useState } from "react";
import { Delete, Read, update } from "../apiServices/CrudServices";
import TableItem from "./TableItem";
import FullScreenLoader from "./common/FullScreenLoader";
import { ErrorToast, SuccessToast } from "../helper/ValidationHelper";
import { useNavigate } from "react-router-dom";


const ListTable = () => {
  let [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {

    fetchData();
  }, []);

    async function fetchData() {
      setLoading(true)
      let result = await Read();
      if (result) {
        setDataList(result);
       
        setLoading(false)
      } else {
        console.warn("No data received or fetch failed.");
      }
    }
   

  const DeleteItem = async (id) => {
    try {
       
      const result = await Delete(id);
   
      
      if (result === true) {
        setDataList(prev=>prev.filter(item => item._id !== id))
        SuccessToast("The Product removed successfully");
      } 
    } catch (error) {
      console.error("Error deleting item:", error);
      ErrorToast("An unexpected error occurred, please try again");
    }
  };
  

  const UpdateItem = async (id) => {
    navigate("/update/"+id)
    const result = await update(id);
    if (result === true) {
      SuccessToast("Product item update successfully");
    } else {
      ErrorToast("Something went wrong try again");
    }
  };

  if (dataList.length > 0) {
    return (
      <>
      {
        loading ? ( 
          <p>Loading...</p>
        ) : (
          <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 rounded-lg shadow-md hidden md:table">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-gray-600 font-medium border-b border-gray-300">
                Product Name
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium border-b border-gray-300">
                Product Code
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium border-b border-gray-300">
                Image
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium border-b border-gray-300">
                Unit Price
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium border-b border-gray-300">
                Qty
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium border-b border-gray-300">
                Total Price
              </th>
              <th className="px-4 py-2 text-left text-gray-600 font-medium border-b border-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, i) => (
              <TableItem
                key={i}
                item={item}
                DeleteItem={DeleteItem}
                UpdateItem={UpdateItem}
              />
            ))}
          </tbody>
        </table>

        {/* Responsive column-wise layout for smaller screens */}
        <div className="block md:hidden">
          <div className="border border-gray-200 rounded-lg shadow-md mb-4">
            <div className="p-4 border-b border-gray-300">
              <p className="text-gray-600 font-medium">
                Product Name:{" "}
                <span className="font-normal">Sample Product 1</span>
              </p>
              <p className="text-gray-600 font-medium">
                Product Code: <span className="font-normal">#00123</span>
              </p>
              <p className="text-gray-600 font-medium">Image:</p>
              <img
                src="/path/to/image.jpg"
                alt="Product Image"
                className="h-10 w-10 object-cover rounded-md mb-2"
              />
              <p className="text-gray-600 font-medium">
                Unit Price: <span className="font-normal">$25.00</span>
              </p>
              <p className="text-gray-600 font-medium">
                Qty: <span className="font-normal">2</span>
              </p>
              <p className="text-gray-600 font-medium">
                Total Price: <span className="font-normal">$50.00</span>
              </p>
              <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm ml-2">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md mb-4">
            <div className="p-4 border-b border-gray-300">
              <p className="text-gray-600 font-medium">
                Product Name:{" "}
                <span className="font-normal">Sample Product 2</span>
              </p>
              <p className="text-gray-600 font-medium">
                Product Code: <span className="font-normal">#00124</span>
              </p>
              <p className="text-gray-600 font-medium">Image:</p>
              <img
                src="/path/to/image2.jpg"
                alt="Product Image"
                className="h-10 w-10 object-cover rounded-md mb-2"
              />
              <p className="text-gray-600 font-medium">
                Unit Price: <span className="font-normal">$15.00</span>
              </p>
              <p className="text-gray-600 font-medium">
                Qty: <span className="font-normal">3</span>
              </p>
              <p className="text-gray-600 font-medium">
                Total Price: <span className="font-normal">$45.00</span>
              </p>
              <div className="mt-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm ml-2">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
      }
      </>
      
    )
  } else {
    return <FullScreenLoader />;
  }
};

export default ListTable;
