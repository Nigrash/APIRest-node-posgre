const { Router } = require('express');
const router = Router();

const {getUsers, createUser, getUserByID, deleteUser, updateUser} = require('../controllers/indexController');

router.get('/users',getUsers);
router.get('users/:id', getUserByID);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser)

module.exports = router;