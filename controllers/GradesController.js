import Grades from "../models/GradesModel.js";

export const getGrades = async(req, res) => {
    try {
        const response = await Grades.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getGradesById = async(req, res) => {
    try {
        const response = await Grades.findOne({
            where:{
                id:req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addGrades = async(req,res) => {
    const jenis_nilai = req.body.jenis_nilai;
    const nilai = req.body.nilai;
    const student_id = req.body.student_id;
    const subject_id = req.body.subject_id;

    if(!jenis_nilai || !nilai || !subject_id || !student_id) return res.status(400).json({msg:"Data Kosong"});
    try {
        await Grades.create({
            jenis_nilai: jenis_nilai,
            nilai: nilai,
            student_id:student_id,
            subject_id:subject_id
        })
        res.status(201).json({msg:"Nilai Ditambahkan"})
    } catch (error) {
        console.log(error)
    }
}

export const updateGrades = async(req,res) => {
    const grades = await Grades.findOne({
        where:{
            id:req.params.id
        }
    });
    if(!grades) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    const {jenis_nilai, nilai} = req.body;

    try {
        await Grades.update({
            jenis_nilai: jenis_nilai,
            nilai: nilai
        },
        {
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Nilai Telah Diubah"})
    } catch (error) {
        
    }
}

export const deleteGrades = async(req,res)=> {
    const grades = await Grades.findOne({
        where:{
            id:req.params.id    
        }
    });
    if(!grades) return res.status(404).json({msg:"Data Tidak Ditemukan"});

    try {
        await Grades.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Nilai Telah Dihapus"})
    } catch (error) {
        
    }
}