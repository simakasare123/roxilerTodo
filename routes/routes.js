const express = require('express');
const router = new express.Router;
const User = require('../controllers/user')
const Todo = require('../controllers/todo');
const Address = require('../controllers/user')
router.get('/',(req,res)=>res.send('ok'));
// user routes
router.post('/user/create',User.create);
router.post('/address/create', User.create);
router.get('/user/find',User.find);
router.get('/user/find/:id', User.todosByUser);
// post routes
router.post('/todo/create', Todo.create);
router.post('/post/populate/:id',Todo.userByTodo);

module.exports = router;
