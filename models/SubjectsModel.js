import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Subjects = db.define('subjects',{
    nama : {
        type: DataTypes.STRING,
        unique: true
    },
    bobot : DataTypes.FLOAT
},{
    freezeTableName:true
});

Grades.belongsTo(Subjects,{foreignKey: 'subject_id'})
Subjects.hasMany(Grades,{
    foreignKey:'subject_id', 
    onUpdate:'CASCADE', 
    onDelete:'CASCADE'
})

export default Subjects;