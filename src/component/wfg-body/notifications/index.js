import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

const StoreMaster = ({
  headerLocationId,
  headerRefresh,
  setHeaderRefresh
}) => {
  const [navList] = useState([
    {
      name: "Store",
      link: "/app/store"
    },
    {
      name: "Location",
      link: "/app/store/location"
    }
  ]);

  return (
    <div>
      <h1 style = {{"margin-left":"500px"}}>

      Notifications
      </h1>
      
    </div>
  );
};

export default StoreMaster;
