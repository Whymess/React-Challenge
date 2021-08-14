import React, { useState } from "react";
import "./index.scss";
import { Input, Itemgroup } from "../../components";
import { sortAssending, sortDesending } from "../../ulti";

export default function Application() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput }];

    setToDoList(copy);
  };

  const sort = (order) => {
    if (order === "desc") {
      let desendingList = [...toDoList].sort(sortAssending);
      setToDoList(desendingList);
    }
    if (order === "asc") {
      let assendingList = [...toDoList].sort(sortDesending);
      setToDoList(assendingList);
    }
  };

  const deleteItem = (id) => {
    let filteredList = toDoList.filter((value) => {
      return id != value.id;
    });
    setToDoList(filteredList);
  };

  return (
    <div className="container mt-3">
      <div className="input-wrapper">
        <Input addTask={addTask} />
        <span className="input-wrapper--direction">
          <span onClick={() => sort("desc")}> ⬇️ </span>
          <span onClick={() => sort("asc")}> ⬆️</span>
        </span>
      </div>
      <div className="list-wrapper">
        <Itemgroup deleteItem={deleteItem} toDoList={toDoList} />
      </div>
    </div>
  );
}
