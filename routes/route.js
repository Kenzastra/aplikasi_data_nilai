import express from "express";
import {
    addStudents,
    deleteStudents,
    getStudents, 
    getStudentsById, 
    updateStudents
} from "../controllers/StudentsController.js";

import { addSubjects, deleteSubjects, getSubjects, getSubjectsById } from "../controllers/SubjectsController.js";
import { addGrades, deleteGrades, getGrades, getGradesById, updateGrades } from "../controllers/GradesController.js";

const route = express.Router();

// Route Students
route.get('/students',getStudents);
route.get('/students/:id',getStudentsById);
route.post('/students',addStudents);
route.patch('/students/:id',updateStudents)
route.delete('/students/:id',deleteStudents);

// Route Subjects
route.get('/subjects',getSubjects);
route.get('/subjects/:id',getSubjectsById);
route.post('/subjects',addSubjects);
route.delete('/subjects/:id',deleteSubjects);

//Route Grades
route.get('/grades',getGrades);
route.get('/grades/:id',getGradesById);
route.post('/grades',addGrades);
route.patch('/grades/:id',updateGrades)
route.delete('/grades/:id',deleteGrades);

export default route ;