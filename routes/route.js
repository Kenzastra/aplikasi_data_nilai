import express from "express";
import {
    addStudents,
    deleteStudents,
    getStudents, getStudentsById, updateStudents
} from "../controllers/StudentsController.js"

const route = express.Router();

route.get('/students',getStudents);
route.get('/students/:id',getStudentsById);
route.post('/students',addStudents);
route.patch('/students/:id',updateStudents)
route.delete('/students/:id',deleteStudents);

export default route ;