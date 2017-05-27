var express = require('express');
var app = express();

require('./config')(app);

app.listen(process.env.PORT || 3000);
