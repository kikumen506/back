const mongoose = require('mongoose');

const dbConnetion = async() => {
    try {
        await mongoose.connect( process.env.DB_CNN , 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false
            });
        console.log('DB funcionando!!!')
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicar la DB');
    }
};

module.exports = {
    dbConnetion
}