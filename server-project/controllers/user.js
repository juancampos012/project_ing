const userModel  = require('../models/user');

const createUser = async (req, res)=>{
    try{
        const { user_name, lastname, email, password, active_status, role} = req.body;
        const avatar = req.file ? req.file.filename : null;
        console.log(avatar);
        const user = new userModel({
            user_name,
            lastname,
            email,
            password,
            active_status,
            role,
            avatar
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({err: "Something went wrong"});
    }
}

const getListUsers = async (req, res)=>{
    try{
        const users = await userModel.find();
        res.status(200).json(users);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
};

const getById = async (req, res)=>{
    try{
        const { id } = req.params;
        console.log(`consultar usuario por ${id}`);
        const user = await userModel.findById(id);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const editUser = async (req, res)=>{
    try{
        const { id } = req.params;
        const { user_name, lastname, email, password} = req.body;
        const user = await userModel.findByIdAndUpdate(
            id,
            { user_name,  lastname, email, password },
            {new: true}
        );
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const deleteUser = async (req, res)=>{
    try{
        const { id } = req.params;
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: "user deleted"});
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports = {createUser, getListUsers, getById, editUser, deleteUser};