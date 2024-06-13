import { sequelizeInstant } from "../connection.js";
import { DataTypes } from "sequelize";

const Post = sequelizeInstant.define(
  "Post",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

export default Post;
