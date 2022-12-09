import mongoose from 'mongoose'

const UserSchema =  new mongoose.Schema({

    name: { String},
    email:{ String}

 

    //name: { type: String, required: true},
    //email:{ type: String, required: true, unique: true }
   
})

export default mongoose.models.User || mongoose.model('User', UserSchema)