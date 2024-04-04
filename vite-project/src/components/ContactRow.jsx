export default function ContactRow({ contact, setSelectedContactID }) {
  return (
    <tr
      onClick={() => {
        console.log("your mom");
        setSelectedContactID(contact.id);
        // setSlectedContactID(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
