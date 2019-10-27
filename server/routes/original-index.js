import Users from "../controllers/user";

import Boards from "../controllers/boards";

export default app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Status API!"
    })
  );

  // User Routes
  app.post("/api/users", Users.signUp); // API route for user to signup
  app.post("/api/users/:userId/boards", Boards.create); // API route for user to create a board
  app.get("/api/boards", Boards.list); // API route for user to get all boards in the database
  app.put("/api/boards/:boardId", Boards.modify); // API route for user to edit a board
  app.delete("/api/boards/:boardId", Boards.delete); // API route for user to delete a board

  // Create a new Note
  app.post("/notes", notes.create);

  // Retrieve all Notes
  app.get("/notes", notes.findAll);

  // Retrieve a single Note with noteId
  app.get("/notes/:noteId", notes.findOne);

  // Update a Note with noteId
  app.put("/notes/:noteId", notes.update);

  // Delete a Note with noteId
  app.delete("/notes/:noteId", notes.delete);
};
