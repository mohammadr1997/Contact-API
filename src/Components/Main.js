import "./style.css";
import { useState, useEffect } from "react";
function Main(props) {
  useEffect(() => {
    props.fetchData();
  }, [props.inputValue]);

  return props.open ? (
    <div className="main">
      <h3>Your Contacts List</h3>

      {props.allContacts.map((data, index) => (
        <div className="main-all">
          <ul>
            <li style={{ textAlign: "left" }}>{index + 1} </li>
            <li style={{ textAlign: "center" }}>
              {" "}
              Name : {data.name.firstname}
            </li>
            <li> Phone : {data.phone}</li>
            <li> Email : {data.email}</li>
          </ul>
        </div>
      ))}
    </div>
  ) : (
    <div className="main">
      {props.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {props.error && <p>Error: {props.error}</p>}

          {props.contact.length > 0 ? (
            <ul>
              {props.contact.map((datum) => (
                <div key={datum.id}>
                  {" "}
                  <li>Name: {datum.name.firstname}</li>
                  <li>Phone: {datum.phone}</li>
                  <li>Email: {datum.email}</li>
                </div>
              ))}
            </ul>
          ) : (
            <p>No contact Found</p>
          )}
        </>
      )}
    </div>
  );
}

export default Main;
