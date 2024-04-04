import { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";
import { dummyContacts } from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  // const [contacts, setContacts] = useState(dummyContacts);

  // console.log("Contacts: ", contacts);
  const [selectedContactID, setSelectedContactID] = useState(null);

  return (
    <>
      {selectedContactID ? (
        <div>
          <SelectedContact
            selectedContactID={selectedContactID}
            setSelectedContactID={setSelectedContactID}
          />
        </div>
      ) : (
        <ContactList setSelectedContactID={setSelectedContactID} />
      )}
    </>
  );
}

// export default App;
