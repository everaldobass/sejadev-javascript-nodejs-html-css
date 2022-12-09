import mongoose from 'mongoose'

const URI = 'mongodb+srv://admin:988hpD51anwsdxdT@cluster0.btxlsna.mongodb.net/?retryWrites=true&w=majority'

const databaseConnection = async () => {

    if(!global.mongoose) {

        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)

    }
}



export default databaseConnection
