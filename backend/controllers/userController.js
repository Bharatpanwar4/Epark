

import asyncHandler from "../middleware/asyncHandler.js";
import User from '../models/userModel.js'
import generateToken from "../utils/generateToken.js";

// Auth user & get token (login)
// POST /api/users/login
// public
const authUser =asyncHandler (async (req,res)=>{

    const {email,password} = req.body;
    const user = await User.findOne({email})
if(user && (await user.matchPassword(password))){
    generateToken(res,user._id)
    res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,

    })
}
else {
    res.status(401)
    throw new Error('Invalid email or password')

}

})

// register user
// POST /api/users
// public
const registerUser =asyncHandler (async (req,res)=>{
const {name,email,password} = req.body;
const userExists = await User.findOne({email})
if(userExists){
    res.status(400)
    throw new Error('User already exists')

}

const user = await User.create({
    name,
    email,
    password,
})
if(user){
    generateToken(res,user._id)
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
    })
}
else{
    res.status(400)
    throw new Error('Invalid User data')
}

})

// logout user / clear cookie
// POST /api/users/logout
// private
const logoutUser =asyncHandler (async (req,res)=>{

res.cookie('jwt','',{
    httpOnly:true,
    expires: new Date(0),

})
res.status(200).json({message:'Logged out successfully'})
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