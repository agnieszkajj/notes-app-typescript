import { useState } from "react";
import { Note } from "./models/note.model";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "meetings",
      text: "schedule a meeting",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
