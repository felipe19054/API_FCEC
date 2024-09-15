const mongoose = require('mongoose');

// Función asincrónica para conectar a la base de datos MongoDB
const conectarDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/authdb', {
            serverSelectionTimeoutMS: 5000, // Tiempo de espera para la selección del servidor
            socketTimeoutMS: 45000 // Tiempi máximo de inactividad del socket
        });
        console.log('MongoDb conectado');
    } catch (error){
        console.error('Error al conectar a MongoBd:', error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;