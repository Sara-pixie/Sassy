const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
    return src("sassyLibrary/**/*.scss")
    .pipe(sass())
    .pipe(dest("css"))
}

function watchTask(){
    watch(["sassyLibrary/**/*.scss"], buildStyles)
}

exports.default = series(buildStyles, watchTask)