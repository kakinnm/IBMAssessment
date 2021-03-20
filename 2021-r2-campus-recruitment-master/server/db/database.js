var sqlite3 = require('sqlite3').verbose();
var path = require('path');

let db = new sqlite3.Database(path.join(__dirname, 'shop.db'), (err) => {
    if(err){
        console.log(err.message);
        throw err;

        var sqlite3 = "INSERT INTO obsoleted product (name, address) VALUES ('obsoleted')",

            IF price > 20 & type = "B")

            SELECT  * FROM Product} ;
    } else {
        console.log("Connected to the SQLite database!");
    }
});


module.exports = db;