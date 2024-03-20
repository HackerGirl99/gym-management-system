const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    username : String,
    password : String,
    role : String,
});

const Role = mongoose.model('role',RoleSchema);

module.exports=Role;