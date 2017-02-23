//gulp file
(function() {

    let gulp = require('gulp');
    let nodemon = require('gulp-nodemon');
    let path = require('path');

    gulp.task('default',() => {
       nodemon({
           script : path.join(__dirname, 'server/main.js'),
           ext : 'js',
           env : {
               port : 8000
           },
           ignore : ['./node_modules/**']
       })
       .on('restart', () => {
           console.log('Restarting node server');
       })

    });

})();
