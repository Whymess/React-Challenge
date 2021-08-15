import React from "react";

// components
import { Item } from "../../components/";

export default function Itemgroup(props) {
  let { toDoList, deleteItem } = props;
  const renderList = () => {
    return (
      [] &&
      toDoList.map((el, i) => {
        let { task, id } = el;
        return <Item deleteItem={() => deleteItem(id)} name={task} key={id} />;
      })
    );
  };

  return <ul className="list-group">{renderList()}</ul>;
}
