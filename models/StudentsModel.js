import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Students = db.define('students',{
    nomor_induk: {
        type: DataTypes.STRING,
        unique: true
    },
    nama: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    tanggal_lahir: DataTypes.DATEONLY
},{
    freezeTableName:true
})

export default Students;

