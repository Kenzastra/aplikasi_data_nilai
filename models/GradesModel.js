import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Students from "./StudentsModel.js";

const {DataTypes} = Sequelize;

const Grades = db.define('grades',{
    jenis_nilai: DataTypes.STRING,
    nilai: DataTypes.FLOAT
},{
    freezeTableName:true
});

Grades.belongsTo(Students,{foreignKey: 'student_id'})
Students.hasMany(Grades,{
    foreignKey:'student_id', 
    onUpdate:'CASCADE', 
    onDelete:'CASCADE'
})

export default Grades;

