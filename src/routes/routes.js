import { Router } from "express";
import { registerUser, loginUser ,logoutUser ,profile,addBook ,getAllUsers, editUser} from "../controllers/userControllers.js";
import { authRequired } from "../midlewares/validateToken.js";
import { createBook ,getAllBooks,getBook,deleteBook,editBook, booksUser, savePages } from "../controllers/bookControllers.js";
import { addImg } from "../controllers/imgControllers.js";


const router = Router();

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
router.post("/api/addImg",  addImg);
router.post("/api/savePage",  savePages);

export default router;
