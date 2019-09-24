const { dest, series, src } = require("gulp");

function css(cb) {
  const postcss = require("gulp-postcss");

  return (
    src("styles.css")
      // ...
      .pipe(
        postcss([
          // ...
          require("tailwindcss"),
          require("autoprefixer")
          // ...
        ])
      )
      // ...
      .pipe(dest("../public/"))
  );
}

exports.build = series(css);
