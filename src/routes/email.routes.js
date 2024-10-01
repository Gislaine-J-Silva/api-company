const { Router } = require('express')
const { sendEmail } = require('../controllers/emailController')

const router = Router()

router.post('/send-email', sendEmail)

module.exports = router