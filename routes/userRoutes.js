const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/', userController.listUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.patch('/:id', userController.patchUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;