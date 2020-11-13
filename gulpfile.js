const { src, watch, dest, parallel } = require("gulp");
const rename = require("gulp-rename");

const postcss = require("gulp-postcss");
function css() {
  return (
    src("assets/styles.css")
      // ...
      .pipe(
        postcss([
          // ...
          require("tailwindcss"),
          require("autoprefixer"),
          // ...
        ])
      )
      .pipe(rename("tail.css"))
      // ...
      .pipe(dest("static/"))
  );
}

function cssbuild() {
  return (
    src("assets/styles.css")
      // ...
      .pipe(
        postcss([
          // ...
          require("tailwindcss"),
          require("autoprefixer"),
          require("cssnano"),
          // ...
        ])
      )
      .pipe(rename("tail.css"))
      // ...
      .pipe(dest("static/"))
  );
}
function watching() {
  watch("./layouts/**/*.html", parallel(css));
  watch("assets/styles.css", parallel(css));
}
// gulp.task("css", function () {
//   return (
//     gulp
//       .src("assets/styles.css")
//       // ...
//       .pipe(
//         postcss([
//           // ...
//           require("tailwindcss"),
//           require("autoprefixer"),
//           // ...
//         ])
//       )
//       // ...
//       .pipe(gulp.dest("static/"))
//   );
// });

exports.cssbuild = cssbuild;
exports.css = css;
exports.default = parallel(css);
exports.watch = watching;
