import { Sequelize } from 'sequelize';

const db = new Sequelize('mern_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db