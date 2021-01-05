var gulp = require('gulp');
var gutil = require('gulp-util');
var zip = require('gulp-zip');
var del = require('del');
var webpackConfig = require('./webpack.config');
var webpack = require('webpack');
var pkg = require('./package.json');

var DIST = './dist';

/* true = directy distribute to extension folder in QS, false = just distribute to dist */
var toQlikFolder = true;
var VERSION = process.env.VERSION || '0.1.7';

function copyExtFiles() {
  return gulp.src('./dist/*').pipe(gulp.dest(`${pkg.qlikshare}/StaticContent/Extensions/${pkg.name}`));
}

gulp.task('qext', function () {
  var qext = {
    name: 'Advanced-KPI',
    type: 'visualization',
    description: pkg.description + '\nVersion: ' + VERSION,
    version: VERSION,
    icon: 'kpi',
    preview: 'advanced-kpi.png',
    keywords: 'qlik-sense, visualization, kpi',
    author: pkg.author,
    homepage: pkg.homepage,
    license: pkg.license,
    repository: pkg.repository,
    dependencies: {
      'qlik-sense': '>=5.5.x'
    }
  };
  if (pkg.contributors) {
    qext.contributors = pkg.contributors;
  }
  var src = require('stream').Readable({
    objectMode: true
  });
  // eslint-disable-next-line no-underscore-dangle
  src._read = function () {
    this.push(new gutil.File({
      cwd: '',
      base: '',
      path: pkg.name + '.qext',
      contents: Buffer.from(JSON.stringify(qext, null, 4))
    }));
    this.push(null);
  };
  return src.pipe(gulp.dest(DIST));
});

gulp.task('clean', function () {
  return del([DIST], { force: true });
});

gulp.task('zip-build', function () {
  return gulp.src(DIST + '/**/*')
    .pipe(zip(`${pkg.name}_${VERSION}.zip`))
    .pipe(gulp.dest(DIST));
});

gulp.task('add-assets', function () {
  return gulp.src('./assets/**/*').pipe(gulp.dest(DIST));
});

gulp.task('webpack-build', done => {
  webpack(webpackConfig, (error, statistics) => {
    const compilationErrors = statistics && statistics.compilation.errors;
    const hasCompilationErrors = !statistics || (compilationErrors && compilationErrors.length > 0);

    console.log(statistics && statistics.toString({ chunks: false, colors: true })); // eslint-disable-line no-console

    if (error || hasCompilationErrors) {
      console.log('Build has errors or eslint errors, fail it'); // eslint-disable-line no-console
      process.exit(1);
    }

    done();
  });
});

gulp.task('init build',
  gulp.series('clean', 'webpack-build', 'qext', 'add-assets')
);

if (toQlikFolder) {
  gulp.task('build',
    gulp.series('clean', 'webpack-build', 'qext', 'add-assets', copyExtFiles)
  );
} else {
  gulp.task('build',
    gulp.series('clean', 'webpack-build', 'qext', 'add-assets')
  );
}

gulp.task('zip',
  gulp.series('build', 'zip-build')
);

gulp.task('default',
  gulp.series('build')
);