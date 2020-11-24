const express = require('express')
const router = express.Router()

const urllib = require('urllib')
router.use(express.urlencoded({ extended: false }))
router.use(express.json())





module.exports = router
