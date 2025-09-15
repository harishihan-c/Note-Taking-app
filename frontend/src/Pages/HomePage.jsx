import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import NavBar from "../Components/NavBar";
import NoteCard from "../Components/NoteCard";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/notes");
        const data = await res.json();
        console.log(data);
        setNotes(data);
      } catch (error) {
        console.error("Fetching Error", error);
        toast.error("Cannot load the notes");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">
            Notes Loading....
          </div>
        )}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
