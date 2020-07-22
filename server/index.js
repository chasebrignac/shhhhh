const express = require('express');
const gcpConnector = require('./gcpConnector');
const app = express();
var storage = gcpConnector();
storage.getEvents();
app.use(express.static('./client'))

app.get('/api/traps', function(req, res) {
    storage.getEvents().then(function(events) {
        res.send(events);
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000!')
});
