import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";

import { Data } from "./Data.jsx";
function App() {
  const [search, setSearch] = useState("");
  // const [contacts, setContacts] = useState(Data);

  return (
    <>
      <div>
        <Container>
          <h1 className="text-center mt-4">Contact keeper</h1>
          <Form>
            <InputGroup className="my-3">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Contacts"
              />
            </InputGroup>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {Data.filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              }).map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default App;
