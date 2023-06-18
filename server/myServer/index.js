import express from "express"
import { DataTypes, Sequelize } from "sequelize"
import { loremIpsum } from "lorem-ipsum"

import { fileURLToPath } from "url"
import path from "path"

import dbInitialization from "./dbInit.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("DIRNAME --> " + __dirname)
const db = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})

const app = express()
app.use(express.json())

async function initDB() {
    const models = {}

    await db.authenticate()


    // PROJECT DEFINITION
    models.Project = db.define('project', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        
        project_name: {
          type: DataTypes.STRING,
          allowNull: false
        },

        logo:{
            type:DataTypes.STRING,
            allowNull:false
        },

        image:{
            type:DataTypes.STRING,
            allowNull:false
        },
        
        startup_presentation: {
          type: DataTypes.STRING,
          allowNull: true
        },
        
        startup_team: {
            type: DataTypes.STRING,
            allowNull: true
          },

        product_service_presentation: {
            type: DataTypes.STRING,
            allowNull: true
        }
        ,
        product_service_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isTop5: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
          supervisor_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        project_areas: {
            type: DataTypes.STRING,
            allowNull: true
        },
        
        // Add more columns as needed for your project table
    });



    // TEAM MEMBERS DEFINITON
    models.Team = db.define('team', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        name:{
            type:DataTypes.STRING,
            allowNull:false
        },

        image:{
            type: DataTypes.STRING,
            allowNull: true
        },

        education:{
            type:DataTypes.STRING,
            allowNull:true
        },

        job_experience:{
            type: DataTypes.STRING,
            allowNull:true,
        },

        main_expertise:{
            type:DataTypes.STRING,
            allowNull:true
        },

        projects_supervised:{
            type:DataTypes.STRING, //string with the names of the projects supervised, separated by a ","
            allowNull: true,
        },

        projects_id: {
            type:DataTypes.STRING,
            allowNull:true
        },

        role:{
            type:DataTypes.STRING,
            allowNull:true
        },

    });

    // AREA DEFINITION
    models.Area = db.define('area', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
        intro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false
        },
        short_summary: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })


    

    await db.sync({ force: true })

    await dbInitialization(models)

    return models
}

async function initServer() {
    const models = await initDB()



    app.get('/projects', async (req, res) => {
        const data = await models.Project.findAll();

        res.status(200).json(data)
    })

    app.get('/teams', async (req, res) => {
        const data = await models.Team.findAll();

        res.status(200).json(data)
    })



    app.get('/projects/:id', async (req, res) => {
        const data = await models.Project.findOne({
            where: {
                id: req.params.id
            }
            
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })

    app.get('/teams/:id', async (req, res) => {
        const data = await models.Team.findOne({
            where: {
                id: req.params.id
            }
            
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })
    
    
    
    app.get('/area', async (req, res) => {
        const data = await models.Area.findAll();

        res.status(200).json(data)
    })
   
    app.get('/area/:id', async (req, res) => {
        const data = await models.Area.findOne({
            where: {
                id: req.params.id
            }
            
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })
    
    

    app.get('/area', async (req, res) => {
        const data = await models.Area.findAll();

        res.status(200).json(data)
    })
   
    app.get('/area/:id', async (req, res) => {
        const data = await models.Area.findOne({
            where: {
                id: req.params.id
            }
            
        })

        if (data) {
            res.status(200).json(data)
        }
        else {
            res.sendStatus(404)
        }
    })
 
}

initServer()
console.log("SERVER INITIALIZED")
export default fromNodeMiddleware(app)
