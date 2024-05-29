import User from "../models/userModel.js";
import fileUpload from "../cloudinary.config.js";
import { createToken } from "../token/createToken.js";
import Crypt from "bcryptjs";
import { Router } from "express";

const router = Router();

router.post(
  "/api/uploadImg",
  fileUpload.single("imageUrl"),
  async (req, res) => {
    if (!req.file) {
      return;
    }
    try {
      res.json({ fileUrl: req.file.path });
    } catch (error) {
      console.log(error);
    }
  }
);

export const registerUser = async (req, res) => {
  const { values, imageUser } = req.body;
  const { userName, lastName, email, password } = values;

  if (req.cookies.token) {
    res.json({ message: "Ya tienes una cuenta creada" });
  } else {
    try {
      const isMatch = await User.findOne({ email });
      console.log(isMatch);
      if (isMatch) {
        res.json({ message: "Email ya registrado" });
      } else {
        const passwordHash = await Crypt.hash(password, 10);
        const newUser = new User({
          userName,
          lastName,
          email,
          password: passwordHash,
          imageUserUrl: imageUser,
        });

        const userSaved = await newUser.save();
        const token = await createToken({ id: userSaved._id });
        res.cookie("token", token);
        res.send(userSaved);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      res.json({ message: "Usuario no encontrado" });
    }
    const isMatch = await Crypt.compare(password, userFound.password);

    if (!isMatch) {
      res.json({ message: "Contraseña no valida" });
    }
    const token = await createToken({ id: userFound._id });
    res.cookie("token", token);
    res.send(userFound);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userFound = await User.find();
    if (!userFound) {
      res.json({ message: "Sin usuarios" });
    }
    res.send(userFound);
    console.log(userFound);
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Sesion cerrada" });
};

export const editUser = async (req, res) => {
  const { email } = req.body;

  const isMatch = await User.findOne({ email });

  if (isMatch) {
    res.send("Correo ya registrado" );
  } else {
    res.json({isMatch} );
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  }
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)
    .populate("books")
    .populate("booksLibrary");
  res.json({userFound})
};

export const addBook = async (req, res, next) => {
  const { userId, bookId } = req.params;
  try {
    const user = await User.findById(userId);
    const isMatch = user.booksLibrary.includes(bookId);
    if (isMatch) {
      res.json({ message: "Este título ya está en tu biblioteca" });
    } else {
      const user = await User.findById(userId);
      user.booksLibrary.push(bookId);
      await user.save();
      res.status(202).json({ data: user });
    }
  } catch (error) {
    next(error);
  }
};
export default router;
