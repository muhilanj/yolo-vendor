import React, { useState, useEffect, useReducer } from "react";
import Table from 'react-bootstrap/Table';
import data from "./productData.json"

import { doGet, doPut } from "../../../utils/http-utils";

const OrderList = () => {

  const [products , setProducts] = useState(data)

  return (
    <>
    {console.table(products)}
      <Table striped>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Unit</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item,index)=>{
          return (
            <tr key={index}>
          <td>{item.productname}</td>
          <td>{item.unit}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
          
        </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  );
};

export default OrderList;
