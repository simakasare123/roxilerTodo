const User = require('../models/user');

const Todo = require('../models/todo');
const res = require('express/lib/response');

module.exports = {
    create : async (req, res) =>{
        const {name , email , address , todos , phone , company , website } = req.body;
        const user = await User.create({
            name,
            email,
            phone,
            website,
            company,
            address,
            todos
        })

        return res.send(user)
    },

    find : async (req, res) => {
        const user = await User.find()
        return res.send(user)
    },
    todosByUser : async (req, res) => {
       const { id } = req.params;
    
       const user = await User.findById(id).select('email name  ' ).populate('todos');
    //    const user = await User.findById(id).populate('todos');
    return res.send(user);

    },
   
}











