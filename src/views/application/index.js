import React from "react";
import "./index.scss";
import { Input } from "../../components";

export default function Application() {
  return (
    <div className="container mt-3">
      <div className="input-wrapper">
        <Input />
        <span className="input-wrapper--direction">
          <span> ⬇️ </span>
          <span> ⬆️</span>
        </span>
      </div>
      <div className="list-wrapper"></div>
    </div>
  );
}
