const { series, parallel, src, dest } = require('gulp')
const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function limparDist() {
    return del(['dist'])
}

function copiarHtml() {
    return src('public/**/*')
        .pipe(dest('dist'))
}

function gerarJS() {
    return browserify({
        basedir: '.',
        entries: ['src/main.ts']
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist'))
}

function gerarJSProducao() {
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.default = series(
    limparDist,
    parallel(
        gerarJS,
        copiarHtml
    ),
    gerarJSProducao
)