const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Nigrash01',
    database: 'firstapi',
    port: '5432'
});

const getUsers = async(req, res) => {
    try{
        const response = await pool.query('SELECT * FROM users');
        res.status(200).json(response.rows);
        /*console.log(response.rows);
        console.log('users');*/
        //res.send(`El usuario "Yaya" o 'Roger' no esta en uso`);
    }
    catch(error){
        console.log(error);
        res.send('Ha ocurrido un error');
    }
    
};

const getUserByID = async(req, res) =>{
    try{
        //res.sed('User ID' + req.params.id);
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(response.rows); 
    }
    catch(error){
        res.send(error);
    }
};

const createUser = async(req, res)=> {
    try{
        const {Nombre, Apellido, Correo} = req.body;

        const response = await pool.query('INSERT INTO users (Nombre, Apellido, Correo) VALUES ($1, $2, $3)', [Nombre, Apellido, Correo]);
        console.log(response);
        res.json({
            message: 'Usuario Creado',
            body: {
                user: {Nombre, Apellido, Correo}
            }
        }); 
    }
    catch(error){
        console.log(error);
        res.send('Ha ocurrido un error');
    }
};

const updateUser = async(req, res) => {
    try{
        const id = req.params.id;
        const {Nombre, Apellido, Correo} = req.body;
        const response = await pool.query('UPDATE users SET Nombre = $1, Apellido = $2, Correo = $3 WHERE id = $4', [
            Nombre,
            Apellido,
            Correo,
            id
        ]);
        console.log(response); 
        res.json('Usuario Actualizado'); 
    }
    catch(error){
        res.send(error)
    }
};

const deleteUser = async(req, res) =>{
    try{
        const id = req.params.id;
        const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        console.log(response)
        req.json(`Users ${id} Eliminado Satisfactoriamente`);
    }
    catch(error){
        res.send(error);
    }
};



module.exports = {
    getUsers,
    getUserByID,
    createUser,
    deleteUser,
    updateUser
}