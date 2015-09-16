
var Q = require('q');
var path = require('path');

function startServer() {
    var deferred = Q.defer();
    var browserSync = require('browser-sync').create();

    // Initialize the browser-sync instance
    browserSync.init({
        server: {
            baseDir: 'C:\\Users\\ommenjik\\Desktop\\test',
            directory: true
        },
        files: path.join('C:\\Users\\ommenjik\\Desktop\\test\\www', '**/*.*'),
        open: false
    }, function (err, bs) {
        // Once BrowserSync is ready, resolve the promise
        if (err) {
            deferred.reject(err);
        }
        var server_url = bs.options.getIn(['urls', 'external']);
        deferred.resolve(server_url);
    });

    return deferred.promise;
}

function main() {
    return startServer().then(function (server_url) {
        console.log('Server started at : ' + server_url);
    });
}

main();
