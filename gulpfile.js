var gulp = require('gulp');

//importar tareas
gulp.task('lint', require('./gulp/eslint'));
//task 
gulp.task('analyze', ['lint']);
gulp.task('pre-push', ['lint']);
