import model from "../models";

const { Tile } = model;

class Tiles {
  static create(req, res) {
    const { name } = req.body;
    const { userId } = req.params;
    return Tile.create({
      name,
      userId
    }).then(tile =>
      res.status(201).send({
        message: `Your tile with the name ${name} has been created successfully `,
        tile
      })
    );
  }
  static list(req, res) {
    return Tile.findAll().then(tiles => res.status(200).send(tiles));
  }

  static modify(req, res) {
    const { name } = req.body;
    return Tile.findById(req.params.tileId)
      .then(tile => {
        tile
          .update({
            name: name || tile.name,
            likes: likes || tile.likes
          })
          .then(updatedTile => {
            res.status(200).send({
              message: "Tile updated successfully",
              data: {
                name: name || updatedTile.name
              }
            });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  static delete(req, res) {
    return Tile.findById(req.params.tileId)
      .then(tile => {
        if (!tile) {
          return res.status(400).send({
            message: "Tile Not Found"
          });
        }
        return tile
          .destroy()
          .then(() =>
            res.status(200).send({
              message: "Tile successfully deleted"
            })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}

export default Tiles;
