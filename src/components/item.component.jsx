import React from "react";

const ItemComponent = ({itemValue}) => {
  return (
    <div>
      <h2>{itemValue.title}</h2>
      <a href="">{itemValue.url}</a>
      <p>{itemValue.author}</p>
      <p>{itemValue.num_comments}</p>
      <p>{itemValue.points}</p>
      <p>{itemValue.objectID}</p>
    </div>
  );
};

export default ItemComponent;
