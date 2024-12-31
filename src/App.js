import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import { useEffect, useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [findContact, setFindContact] = useState(true);

  const fetchData = async () => {
    if (!input) return;

    setLoading(true);
    setFindContact(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      if (!response.ok) {
        throw new Error("you can not get data according to connection ");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError("there is a problem with your connection");
    } finally {
      setLoading(false);
      setFindContact(true);
    }
  };
  const getAllContacts = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const data = await response.json();
    setAllContacts(data);
  };
  const handleAllContact = function () {
    setOpen(!open);
    getAllContacts();
  };
  const contact = data.filter(
    (datum) => datum.name.firstname.toLowerCase() === input.toLowerCase()
  );

  return (
    <div className="App">
      <Navbar
        inputValue={input}
        setInputValue={setInput}
        handleAllContact={handleAllContact}
        open={open}
        setOpen={setOpen}
        data={data}
        contact={contact}
      />
      <Main
        inputValue={input}
        data={data}
        loading={loading}
        error={error}
        open={open}
        fetchData={fetchData}
        allContacts={allContacts}
        setFindContact={setFindContact}
        findContact={findContact}
        contact={contact}
      />
    </div>
  );
}

export default App;
