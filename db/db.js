var sqlite3 = require('sqlite3')
var path = require('path')

const db = new sqlite3.Database(path.join(__dirname, './gcs.db'), (err)=> {
    console.log(err)
})

// db.get('SELECT * FROM MissionPlan', (err, rows) => {
//     console.log(err)
//     console.log(rows)

// }) 

module.exports = db