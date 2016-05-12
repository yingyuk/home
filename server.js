/*
 * @Author: Yuk
 * @Date:   2016-05-08 14:52:09
 * @Last Modified by:   yingyuk
 * @Last Modified time: 2016-05-12 22:25:45
 */

'use strict';

var express = require('express');
var path = require('path');
var app = express();
var port = 9000;

app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
	res.render('path');
})
app.listen(port);
console.log('server listening on port ' + port);
