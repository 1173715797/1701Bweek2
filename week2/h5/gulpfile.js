var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    return gulp.src('./src/')
        .pipe(webserver({
            open: true,
            port: 8989,
            livereload: true,
            proxies: [
                { source: "/api/getfind", target: "http://localhost:3000/api/getfind" }
            ]
        }))
})