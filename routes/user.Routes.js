import express from 'express'
import ROLES_LIST from '../config/roles_list.js'
import verifyRoles from '../controllers/verifyRoles.controller.js'
import * as userController from '../controllers/user.Controller.js'

const router =  express.Router()

router.route('/')
        .get(verifyRoles(ROLES_LIST.User), userController.getAllUsers)
        .post(verifyRoles(ROLES_LIST.User, ROLES_LIST.SuperAdmin, ROLES_LIST.Admin, ROLES_LIST.Employee), userController.createNewUsers)
        
        
        router.route('/me')
        .get(userController.getCurrentUsers)
        
        router.route('/:id')
        .get(userController.getUser)
        .patch(userController.updateUser, verifyRoles(ROLES_LIST.User, ROLES_LIST.SuperAdmin, ROLES_LIST.Admin, ROLES_LIST.Employee))
        .delete(userController.deleteUser, verifyRoles(ROLES_LIST.User, ROLES_LIST.SuperAdmin, ROLES_LIST.Admin))

export default router
