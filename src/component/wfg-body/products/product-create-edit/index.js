import React, { useState } from "react";

import OrderMenu from "./product-menu";

const OrderCreateEdit = ({ headerStoreId }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <div className="col-md-5">
        <OrderMenu
          headerStoreId={headerStoreId}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </div>
      
    </>
  );
};

export default OrderCreateEdit;
