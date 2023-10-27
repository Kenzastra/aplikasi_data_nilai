import Students from "../models/StudentsModel.js"


export const getStudents = async(req, res) => {
    try {
        const response = await Students.findAll();
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const getStudentsById = async(req, res) => {
    try {
        const response = await Students.findOne({
            where:{
                id:req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export const addStudents = async(req,res) => {
    const {nomor_induk, nama, alamat, tanggal_lahir} = req.body;
    if(!nomor_induk || !nama || !alamat || !tanggal_lahir) return res.status(404).json({msg:'Data Kosong'})
    try {
        const NIS = await Students.findOne({
            where:{
                nomor_induk: req.body.nomor_induk
            }
        });
        if(NIS) return res.status(400).json({msg:"Nomor Induk Telat Ada"})
        await Students.create({
            nomor_induk: nomor_induk,
            nama: nama,
            alamat: alamat,
            tanggal_lahir: tanggal_lahir});
        res.status(201).json({msg:"Siswa Berhasil Ditambahkan"})
    } catch (error) {
        console.log(error)
    }
}

export const updateStudents = async(req,res) => {

    const student = await Students.findOne({
        where:{
            id: req.params.id
        }
    })
    if(!student) return res.status(404).json({msg:"Data Tidak Ditemukan"});

    const {nama, alamat, tanggal_lahir} = req.body;
    try {
        await Students.update({
            nama: nama,
            alamat: alamat,
            tanggal_lahir: tanggal_lahir},
            {
                where:{
                    id:req.params.id
                }
            });
        res.status(200).json({msg:"Data Siswa Berhasil Di Update"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteStudents = async(req,res) => {
    const student = await Students.findOne({
        where:{
            id:req.params.id
        }
    });
    if(!student) return res.status(404).json({msg:"Data Tidak Ditemukan"});
    try {
        await Students.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg:"Data Siswa Terhapus"})
    } catch (error) {
        console.log(error)
    }
}
