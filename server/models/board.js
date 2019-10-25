export default (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "Board",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter the title for your board"
        },
        unique: {
          args: true,
          msg: "Oops, looks like that board name is taken!"
        }
      },
      author: {
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
      likes: {
        type: DataTypes.INTEGER,
        references: {
          key: "likes"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
          as: "userId"
        }
      }
    },
    {}
  );
  Board.associate = models => {
    // associations can be defined here
    Board.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE"
    });
  };
  return Board;
};
