import { SetStateAction } from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface NotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<SetStateAction<Note[]>>;
}

const NotesList = ({ notes, setNotes }: NotesListProps) => {
  const handleDelete = (id: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  return (
    <>
      <h2 className="mt-3">Notes</h2>
      <div>
        {notes.map((note: Note) => {
          return (
            <Notes
              key={note.id}
              note={note}
              handleDelete={handleDelete}
            ></Notes>
          );
        })}
      </div>
    </>
  );
};

export default NotesList;
