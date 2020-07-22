const express = require('express');
const trapStatus = require('./api/trapStatus');
const app = express();
modules.export = {
    launch:function(){
        app.get('/', function (req, res) {
            res.send('Hello World!')
        });

        app.get('/traps', function (req, res) {
            res.send(storage.getEvents());
        });

        app.listen(process.env.PORT || 3000, function () {
            console.log('Example app listening on port 3000!')
        });
    }
}

