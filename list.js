import react from "react";
import { useState } from "react";

function Listele({ allEntries }) {

  const [filterText, setfilterText] = useState("");

  const filterFunc = (e) => {
    setfilterText(e.target.value)
}

  return (
    <div>
      <div>
        <input type="text" name="filterInput" value={filterText} onChange={filterFunc}></input>
      </div>
      <ul>
        {allEntries.map((item, index) => (
          <li key={index}>{item.fullName} {item.phoneNum}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listele;
