const models = require("../database/models");

const createWizard = async (req, res) =>{
    try{
        const wizard = await models.Wizard.create(req.body);
        return res.status(201).json({
            wizard
        });
    }catch(error){
        return res.status(500).json({error:error.message});
    }
};

const getAllWizards = async(res)=>{
    console.log("Getting Wizards");
    try{
        const wizards = await models.Wizard.findAll({
            include:[
                ]
        });
        return res.status(200).json({wizards});
    }catch(error){
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createWizard,
    getAllWizards
};