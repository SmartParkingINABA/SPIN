import express from 'express'
import forgotPasswordController from '../controllers/ForgotPasswordControllers.js'

const forgotPasswordRoutes = express.Router();

forgotPasswordRoutes.use('/forgot-password', forgotPasswordController.requestOtp);

forgotPasswordRoutes.use('/verify-otp', forgotPasswordController.verifyOTP);

forgotPasswordRoutes.use('/reset-password', forgotPasswordController.resetPassword);

export default forgotPasswordRoutes;