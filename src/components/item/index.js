import React from "react";

export default function Item(props) {
  let { name } = props;
  return (
    <li key={Math.random()} className="list-group-item mt-2">
      {name}
    </li>
  );
}
