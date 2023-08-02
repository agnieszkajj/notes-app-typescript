import { Note } from "../../models/note.model";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface NotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes = ({ note, handleDelete }: NotesProps) => {
  return (
    <div className="mb-3" data-testid="note-container">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mb-3 mt-3"
            variant="danger"
            onClick={() => {
              handleDelete(note.id);
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
