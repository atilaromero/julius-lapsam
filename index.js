var express = require('express');
var spawn = require('child_process').spawn;
var busboy = require('connect-busboy');

var app = express();

app.use(busboy({immediate: true}));

app.get('/', function(req, res){
    var html = '<form action="/" method="post" enctype="multipart/form-data">' +
        'Select your file:' +
        '<input type="file" name="data" />' +
        '<br/>' +
        '<button type="submit">Submit</button>' +
        '</form>';
    
    res.send(html);
});

app.use(function(req,res){
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        console.log('File [' + fieldname + ']: filename: ' + filename + 
                    ', encoding: ' + encoding + 
                    ', mimetype: ' + mimetype);

        var child = spawn('docker-compose', ['run','--rm','julius']);
        child.stdout.on('data', function(chunk) {
	    console.log(chunk.toString());
            res.write(chunk);
        });

	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});

        child.stdout.on('end', function(chunk) {
            res.end();
        });

        file.on('data', function(data) {
            child.stdin.write(data);
        });
        file.on('end', function() {
            child.stdin.end();
        });
    });
});

var server = app.listen(8081, function () {
    
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});

/* 
app.post('/', function (req, res) {
  console.log(req.params);
  console.log(req.body);
  console.log(req.files);
  
});
*/
