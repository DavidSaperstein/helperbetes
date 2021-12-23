const express = require('express')
const userSettingsRouter = express.Router()
const User = require('../models/user.js')

//update user settings

userSettingsRouter.put("/update", (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    req.body,
    { new: true },
    (err, updatedUser) => {
      if(err){
        console.log(req.body)
        res.status(500)
        return next(err)
      }
      console.log(req.body)
      return res.status(201).send(updatedUser)
    }
  )
})

module.exports = userSettingsRouter