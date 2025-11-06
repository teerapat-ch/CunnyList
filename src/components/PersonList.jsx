import { useState } from "react";
import "./PersonList.css";
import User from "./User";

const PersonList = ({ data, deleteCunny }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="PersonList">
      <h2> Cunny list</h2>
      <button id="show-btn" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <ul>
        <li>
          {show && <h2>Name</h2>}
          {show && <h2>School</h2>}
          {show && <h2>Action</h2>}
        </li>
        {show &&
          data.map((item) => (
            <User key={item.id} item={item} deleteCunny={deleteCunny} />
          ))}
      </ul>
    </div>
  );
};

export default PersonList;
