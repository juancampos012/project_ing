const SuperheroModel  = require('../models/superheroe');

const createSuperhero = async (req, res)=>{
    try{
        const { superhero_name, superpowers, isAlive} = req.body;
        console.log(req.boy);
        const newSuperhero = new SuperheroModel({
            superhero_name,
            superpowers,
            isAlive
        });
        console.log(newSuperhero);
        const superheroSaved = await newSuperhero.save();
        res.status(201).json(superheroSaved);
    }catch(err){
        res.status(500).json({err: "Something went wrong"});
    }
}

const getListSuperhero = async (req, res)=>{
    try{
        const superhero = await SuperheroModel.find();
        res.status(200).json(superhero);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
};

const getByIdSuperhero = async (req, res)=>{
    try{
        const { id } = req.params;
        console.log(`consultar usuario por ${id}`);
        const user = await SuperheroModel.findById(id);
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const editSuperhero = async (req, res)=>{
    try{
        const { id } = req.params;
        const { superhero_name, superpowers, isAlive} = req.body;
        const superhero = await SuperheroModel.findByIdAndUpdate(
            id,
            { superhero_name, superpowers, isAlive },
            {new: true}
        );
        res.status(201).json(superhero);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

const deleteSuperhero = async (req, res)=>{
    try{
        const { id } = req.params;
        const superhero = await SuperheroModel.findByIdAndDelete(id);
        res.status(200).json({message: `Superhero deleted ${superhero.superhero_name}`});
    }catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports = {createSuperhero, getListSuperhero, getByIdSuperhero, editSuperhero, deleteSuperhero};