import { sequelizeInstant } from "../connection.js";
import { DataTypes } from "sequelize";

const Comment = sequelizeInstant.define(
  "Comment",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

export default Comment;
