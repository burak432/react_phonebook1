import MyForm from "./form.js";
import Listele from "./list.js";
import { useState } from "react";
import "./style.css";

function MyContacts() {
  const [allEntries, setAllEntries] = useState([
    { fullName: "Javascript", phoneNum: 123123123 },
    { fullName: "React", phoneNum: 234234234 },
    { fullName: "HTML / CSS", phoneNum: 345345345 },
    { fullName: "Tea", phoneNum: 456456456 },
  ]);

  return (
    <div className="container">
      <h1>Contacts</h1>
      <Listele allEntries={allEntries} />
      <MyForm allEntries={allEntries} setAllEntries={setAllEntries} />
    </div>
  );
}

export default MyContacts;
