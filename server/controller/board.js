import model from "../models";

const { Board } = model;

class Boards {
  static create(req, res) {
    const { name } = req.body;
    const { userId } = req.params;
    return Board.create({
      name,
      userId
    }).then(board =>
      res.status(201).send({
        message: `Your board with the name ${name} has been created successfully `,
        board
      })
    );
  }
  static list(req, res) {
    return Board.findAll().then(boards => res.status(200).send(boards));
  }
  static modify(req, res) {
    const { name } = req.body;
    return Board.findById(req.params.boardId)
      .then(board => {
        board
          .update({
            name: name || board.name
          })
          .then(updatedBoard => {
            res.status(200).send({
              message: "Board updated successfully",
              data: {
                name: name || updatedBoard.name
              }
            });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  static delete(req, res) {
    return Board.findById(req.params.boardId)
      .then(board => {
        if (!board) {
          return res.status(400).send({
            message: "Board Not Found"
          });
        }
        return board
          .destroy()
          .then(() =>
            res.status(200).send({
              message: "Board successfully deleted"
            })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}

export default Boards;
