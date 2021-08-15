import React from "react";

export default function Item(props) {
  let { name, deleteItem } = props;
  return (
    <li
      key={Math.random()}
      className="list-group-item mt-2 d-flex justify-content-between"
    >
      <div> {name}</div>
      <div onClick={deleteItem}> 🗑 </div>
    </li>
  );
}
