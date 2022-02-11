import MyForm from "./form.js";
import Listele from "./list.js";
import { useState } from "react";

function MyContacts() {
  const [allEntries, setAllEntries] = useState([
    { fullName: "asdasdsa", phoneNum: 12121 },
    { fullName: "dsfsdfsd", phoneNum: 232322 },
  ]);

  return (
    <div>
      react contacts app
      <Listele allEntries={allEntries} />
      <MyForm allEntries={allEntries} setAllEntries={setAllEntries} />
    </div>
  );
}

export default MyContacts;
