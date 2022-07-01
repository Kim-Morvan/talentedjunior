import express from 'express'
import handleRefreshToken from '../controllers/jwt.RefreshToken.Controller.js'

const router =  express.Router()

router.route('/').get(handleRefreshToken)

export default router
