import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('123456',10),
        idAdmin:true,
    },
    {
        name:'Bharat',
        email:'bharat@gmail.com',
        password:bcrypt.hashSync('123456',10),
        idAdmin:true,
    },
    {
        name:'bp',
        email:'bp@gmail.com',
        password:bcrypt.hashSync('123456',10),
        idAdmin:false,
    },
]
export default users