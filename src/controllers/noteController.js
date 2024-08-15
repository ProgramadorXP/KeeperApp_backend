import db from "../config/db.js";

export const getAllNotes = async (req, res) => {
    try {
      const result = await db.query("SELECT * FROM notes;");
      return res.json(result.rows);
    } catch (error) {
      console.error("Error fetching notes:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export const addNote = async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ errors: "Title & Content are required" });
    }
  
    try {
      const result = await db.query(
        "INSERT INTO notes (title, content) VALUES($1, $2) RETURNING *;",
        [title, content]
      );
      return res.status(201).json({
        message: "Note created successfully",
        note: result.rows[0],
      });
    } catch (error) {
      console.error("Error inserting note:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export const deleteNote = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await db.query("DELETE FROM notes WHERE id = $1 RETURNING *;", [id]);
      return res.status(200).json({ message: "Note deleted successfully", note: result.rows });
    } catch (error) {
      console.error("Error deleting note:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };