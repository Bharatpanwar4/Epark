

import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js'



// Auth user & get token (login)
// POST /api/users/login
// public
const authUser =asyncHandler (async (req,res)=>{

    res.send('auth user')

})

// register user
// POST /api/users
// public
const registerUser =asyncHandler (async (req,res)=>{

    res.send('register user')

})

// logout user / clear cookie
// POST /api/users/logout
// private
const logoutUser =asyncHandler (async (req,res)=>{

    res.send('logout user')

})


// get user profile
// GET /api/users/profile
// private
const getUserProfile =asyncHandler (async (req,res)=>{

    res.send('get user profile')

})


// update user profile
// PUT /api/users/profile
// private
const updateUserProfile =asyncHandler (async (req,res)=>{

    res.send('update user profile')

})

// get all users 
// GET /api/users
// private/Admin
const getUsers =asyncHandler (async (req,res)=>{

    res.send('get users')

})
// get user by ID 
// GET /api/users/:id
// private/Admin
const getUserByID =asyncHandler (async (req,res)=>{

    res.send('get user by id')

})

// delete user
// DELETE /api/users/:id
// private/Admin
const deleteUser =asyncHandler (async (req,res)=>{

    res.send('delete user')

})


// update user (by admin)
// PUT /api/users/:id
// private/Admin
const updateUser =asyncHandler (async (req,res)=>{

    res.send('user user')

})


export {
    authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,getUsers,deleteUser,getUserByID,updateUser
}