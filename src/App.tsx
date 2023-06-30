import { useState } from "react";
import { Note } from "./models/note.model";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import NotesList from "./components/NotesList";

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
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes}></NotesList>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
