import { useState } from "react";
import { Note } from "./models/note.model";

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

  return <></>;
}

export default App;
