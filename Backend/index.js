const express = require("express")
const cors = require("cors")
const fs = require("fs")
const { resolve } = require("path")
const app = express()
app.use(cors())
port = 3001


app.get("/", (req, res) => {
    const files = []
    fs.readdirSync("./dados/").forEach(file => {
        files.push(file)
    });
    let cont = 0
    const indexes = []
    const min = Math.ceil(0)
    const max = Math.floor(files.length)
    while(cont < 4) {
        indexes.push(Math.floor(Math.random() * (max - min)) + min);
        cont++
    }
    console.log(indexes)
    const filesChoice = indexes.map(i => files[i])
    console.log("************************************")
    console.log(filesChoice)
    
    getData(filesChoice).then((data) => {
        console.log(data)
        const json = JSON.stringify(data)
        console.log("JSON: ", json)
        res.send(json)

    })
    
    
})

async function getData(filesChoice){
    console.log("files choice inside get data", filesChoice)
    let promisse = new Promise ((resolve, reject) => {
        let data = []
        for (const file of filesChoice) {
            fs.readFile(`./dados/${file}/${file}.json`, (err, jsonString) =>{
                if (err){
                    console.log(err)
                }
                try {
                    const value = JSON.parse(jsonString)
                    //console.log(value)
                    data.push(value)
                } catch(err){
                    console.log(err)
                }
                
            }
        )}
        setTimeout(() => {
            resolve(data)
        }, 300);
    } )
    let data = await promisse

    return data
}


app.listen(port, () => {
    console.log("example")
})