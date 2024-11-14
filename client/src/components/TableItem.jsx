import PropTypes from "prop-types";

const TableItem = ({item, DeleteItem, UpdateItem}) => {

    
    return (
        <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b border-gray-200">{item.productName}</td>
        <td className="px-4 py-2 border-b border-gray-200">{item.productCode}</td>
        <td className="px-4 py-2 border-b border-gray-200">
          <img src={item.image} alt="Product Image" className="h-10 w-10 object-cover rounded-md" />
        </td>
        <td className="px-4 py-2 border-b border-gray-200">${item.unitPrice}</td>
        <td className="px-4 py-2 border-b border-gray-200">{item.qty}</td>
        <td className="px-4 py-2 border-b border-gray-200">${item.totalPrice}</td>
        <td className="px-4 py-2 border-b border-gray-200">
          <button onClick={()=>UpdateItem(item._id)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Edit</button>
          <button onClick={()=>DeleteItem(item._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm ml-2">Delete</button>
        </td>
      </tr>
    );
};

TableItem.propTypes={
    item:PropTypes.object.isRequired,
    DeleteItem:PropTypes.func.isRequired,
    UpdateItem:PropTypes.func.isRequired
}


export default TableItem;