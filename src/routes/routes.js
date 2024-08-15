import { Router } from "express";
import { registerUser, loginUser ,logoutUser ,profile,addBook ,getAllUsers, editUser, deleteImage } from "../controllers/userControllers.js";
import { authRequired } from "../midlewares/validateToken.js";
import { createBook ,getAllBooks,getBook,deleteBook,editBook, booksUser, savePages } from "../controllers/bookControllers.js";

import { removeBookLibrary } from "../controllers/userControllers.js";

const router = Router();
router.put("/api/removeBookLibrary/:userId/:bookId", removeBookLibrary);
router.post("/api/registerUser", registerUser);
router.post("/api/logoutUser",logoutUser);
router.put("/api/editUser/:id", editUser);
router.get("/api/profile", profile);
router.post("/api/loginUser",  loginUser);
router.post("/api/createBook", createBook);
router.get("/api/getAllBooks", getAllBooks);
router.get("/api/getAllUsers", getAllUsers);
router.get("/api/getBook/:id", getBook);
router.delete("/api/deleteBook/:id", deleteBook);
router.put("/api/editBook/:id", editBook);
router.get("/api/booksUser", booksUser);
router.put("/api/addBook/:userId/:bookId", addBook);
router.post("/api/savePage",  savePages);
router.post("/api/deleteImg", deleteImage)
  

export default router;
