import { Router } from "express";
import { registerUser, loginUser ,logoutUser ,profile,addBook ,getAllUsers, editUser, deleteImage } from "../controllers/userControllers.js";
import { authRequired } from "../midlewares/validateToken.js";
import { createBook ,getAllBooks,getBook,deleteBook,editBook, booksUser, savePages } from "../controllers/bookControllers.js";

import { removeBookLibrary } from "../controllers/userControllers.js";

const router = Router();
router.put("/api/removeBookLibrary/:userId/:bookId", removeBookLibrary);
router.post("/api/registerUser", registerUser);
router.post("/api/logoutUser",logoutUser);
router.put("/api/editUser/:id", authRequired,editUser);
router.get("/api/profile", authRequired,profile);
router.post("/api/loginUser",  loginUser);
router.post("/api/createBook", authRequired,createBook);
router.get("/api/getAllBooks", getAllBooks);
router.get("/api/getAllUsers", getAllUsers);
router.get("/api/getBook/:id", getBook);
router.delete("/api/deleteBook/:id", authRequired,deleteBook);
router.put("/api/editBook/:id", authRequired,editBook);
router.get("/api/booksUser", authRequired,booksUser);
router.put("/api/addBook/:userId/:bookId", authRequired, addBook);
router.post("/api/savePage",  savePages);
router.post("/api/deleteImg", deleteImage)
  

export default router;
