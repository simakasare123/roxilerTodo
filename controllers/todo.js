

const Todo = require('../models/todo');
const User = require('../models/user');


module.exports = {
    create : async (req, res) => {
        // const user = req.params;
        // console.log(userId)
      
        const{Title , completed , id , user} = req.body;
        const todo = await Todo.create({
            Title,
            completed,
            user,
            id
 
            
        });
        console.log(user)
        await todo.save();

        let result = await User.findByIdAndUpdate(user , 
            {$push:{todos:todo._id}},
            { new: true }


            );
            await result.save();
           


        // const userById = await User.findById(user);
        // console.log(userById)
        // userById.todos.push(todo);

        // await userById.save();

        res.send(todo)


        return res.send(todo);
    },
    userByTodo : async (req,res)=>{
        const { id } = req.params;
        const userByTodo = await Todo.findById(id).populate('user');
        res.send(userByTodo);
    }
}


