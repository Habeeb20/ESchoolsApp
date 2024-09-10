import express from "express";
import { createBook,getAllBooks } from "../../controllers/school/libraryController.js";

const bookRouter = express.Router();

bookRouter.get('/bookgetall', getAllBooks);
bookRouter.post('/books', createBook);


export default bookRouter;