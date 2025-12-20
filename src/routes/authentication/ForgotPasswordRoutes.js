import express from 'express'
import forgotPasswordController from '../../controllers/authentication/ForgotPasswordControllers.js'

const forgotPasswordRoutes = express.Router();

forgotPasswordRoutes.post('/request-otp', forgotPasswordController.requestOtp);

forgotPasswordRoutes.post('/verify-otp', forgotPasswordController.verifyOTP);

forgotPasswordRoutes.post('/reset-password', forgotPasswordController.resetPassword);

export default forgotPasswordRoutes;