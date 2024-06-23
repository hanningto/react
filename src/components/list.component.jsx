import React from "react";
import ItemComponent from "./item.component";

const ListComponent = ({ list }) => {
  return (
    <div>
        {list.map((item) => (
            // <p>{item.title}</p>
            <ItemComponent key={item.objectID} itemValue ={item}/>
        ))}
    </div>
  );
};

export default ListComponent;
