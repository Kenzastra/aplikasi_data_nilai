import Subjects from "../models/SubjectsModel.js";

export const getSubjects = async(req, res) => {
    try {
        const response = await Subjects.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getSubjectsById = async(req, res) => {
    try {
        const response = await Subjects.findOne({
            where:{
                id:req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addSubjects = async(req,res) => {
    const {nama,bobot} = req.body;
    if(!nama || !bobot) return res.status(404).json({msg:'Data Kosong'})
    try {
        const mapel = await Subjects.findOne({
            where:{
                nama: req.body.nama
            }
        });
        if(mapel) return res.status(400).json({msg:"Mapel Telah Ada"})
        await Subjects.create({
            nama: nama,
            bobot: bobot,

        });
        res.status(201).json({msg:"Mapel Berhasil Ditambahkan"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteSubjects = async(req,res) => {
    const subject = await Subjects.findOne({
        where:{
            id:req.params.id
        }
    });
    if(!subject) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    try {
        await Subjects.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Data Mapel Terhapus"})
    } catch (error) {
        console.log(error)
    }
}
