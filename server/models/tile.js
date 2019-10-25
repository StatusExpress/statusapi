export default (sequelize, DataTypes) => {
  const Tile = sequelize.define(
    "Tile",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      status_code: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter the title for your board"
        }
      },
      status_description: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter an author"
        }
      },
      img_url: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter an author"
        }
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      boardId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Board",
          key: "id",
          as: "boardId"
        }
      }
    },
    {}
  );
  Tile.associate = models => {
    // associations can be defined here
    Tile.belongsTo(models.Board, {
      foreignKey: "tileId",
      onDelete: "CASCADE"
    });
  };
  return Tile;
};
