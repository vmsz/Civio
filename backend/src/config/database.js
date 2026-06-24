import { Sequelize } from 'sequelize'

const database = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'civio',
    username: 'postgres',
    password: '1911',
    define: {
        timestamps: false,
        freezeTableName: true,
        modelName: 'singularName'
    },
    logging: false
}


export default new Sequelize(database)