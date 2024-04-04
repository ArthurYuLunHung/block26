import { useState, useEffect } from "react";

const selectedContact = ({ selectedContactID, setSelectedContactID }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactID}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  return (
    <>
      <h1 style={{ backgroundColor: "black", color: "red" }}>
        Contact Details
      </h1>
      {contact && (
        <div>
          <p>ID: {contact.id}</p>
          <p>Name: {contact.name}</p>
          <p>Username: {contact.username}</p>
          <p>Email: {contact.email}</p>
          <p>Address: {contact.address.street}</p>
        </div>
      )}
      <button
        onClick={() => {
          setSelectedContactID(null);
        }}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Return
      </button>
    </>
  );
};

export default selectedContact;
