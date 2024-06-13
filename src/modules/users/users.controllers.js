import User from "../../../DB/Models/users.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registration = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    const emailCheck = await User.findOne({ where: { email } });
    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (
      typeof userName !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({ message: "Invalid input types!" });
    }
    if (emailCheck)
      return res.status(404).json({ message: "this email is already exist!" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "User registerd successfully", user });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "error registering user", error: error.message });
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not Found!" });
    }
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword)
      return res.status(404).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user.id }, "Your_jwt_secret", {
      expiresIn: "1h",
    });
    return res
      .status(201)
      .json({ message: "Login Successfully ,Welcom Hero !", token });
  } catch (error) {
    return res.status(400).json({ message: "Error logging in", error });
  }
};
export const logout = (req, res, next) => {
  // enter 0 if you wana close 1 if you wanna keep logging in
  const { logout } = req.body;
  if (!logout)
    return res.status(400).json({ message: "you still here keep going " });
  return res.status(203).json({ message: "You logged out!" });
};
