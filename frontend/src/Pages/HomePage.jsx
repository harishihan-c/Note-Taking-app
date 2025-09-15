import React, { useEffect } from "react";
import toast from "react-hot-toast";
import NavBar from "../Components/NavBar";

const HomePage = () => {
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/notes");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Fetching Error", error);
        toast.error("Cannot load the notes")
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default HomePage;
