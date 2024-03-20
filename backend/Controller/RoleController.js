const Role = require('../Model/RoleSchema');

const getRole = async (req,res)=>{
    const { username, password } = req.body;
    
    
        const user = await Role.findOne({username,password})
        if(user){
            const {role} = user
            res.status(200).json({ status: "successful",role });
            
        }
        else
        {
            res.json("failed")
            console.log("failed")
        }    
}

module.exports = {getRole};