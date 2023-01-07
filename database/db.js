const mongoose = require('mongoose');

const connectionDB = async() => {
    
    mongoose.set('strictQuery', false);

    try {

        await mongoose.connect('mongodb+srv://brajhan:y9iUXU1TjxTnX6DF@cluster0.exf8g9k.mongodb.net/prueba');
        console.log('DB sincronizada');
    } catch (error) {
        console.log(error);
    }

}

module.exports = { connectionDB }

