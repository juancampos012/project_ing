const AddressModel  = require('../models/address');

const createAddress = async (req, res)=>{
    try{
        const { name_country, departament, municipality, nomenclature, direction_active } = req.body;
        console.log(req.boy);
        const newAddress = new AddressModel({
            name_country,
            departament,
            municipality,
            nomenclature,
            direction_active
        });
        console.log(newAddress);
        const addressSaved = await newAddress.save();
        res.status(201).json(addressSaved);
    }catch(err){
        res.status(500).json({err: "Something went wrong"});
    }
}

module.exports = {createAddress}