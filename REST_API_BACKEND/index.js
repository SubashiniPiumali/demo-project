const express = require('express');
const app = express();
const fs = require("fs");
const cors = require('cors');
const apiRoutes = express.Router();
const PORT = 4000;

app.use(cors()); //cross-origin-resource-sharing

apiRoutes.route('/all').get(function(req,res){
    fs.readFile(__dirname + "/" + "countries.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

// apiRoutes.route('/:alpha2code').get(function(req,res){
//     fs.readFile( __dirname + "/" + "countries.json", 'utf8', function (err, data) {
//         const countries = JSON.parse( data );
//         let country = [];

//         for(var c in countries){
//             if(countries[c]["alpha2Code"] === req.params.alpha2code){
//                 console.log(countries[c]);
//                 country = countries[c] 
//             }
//         }
//         res.end( JSON.stringify(country));
//      });
// });

app.use('/api/v1',apiRoutes);    

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});