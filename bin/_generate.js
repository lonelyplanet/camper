const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");

const workdir = process.cwd();

module.exports = function(src, options) {
  const dest = path.join(workdir, options.dest || "dist");
  src = path.join(workdir, src || "src");
  const pages = fs.readdirSync(src);
  const compilers = {
    jsx: require("../dist/compilers/react").default,
  };

  let generated = [];

  pages.forEach((p) => {
    const files = fs.readdirSync(path.join(src, p));
    let page = files.filter((f) => ~f.indexOf("index"));

    if (!page.length) {
      return;
    }
    page = page[0];

    const ext = path.extname(page).substr(1);
    const Compiler = compilers[ext];
    let html;

    if (Compiler) {
      const compiler = new Compiler();

      html = compiler.compile({
        page: path.join(src, p),
        data: require(`${path.join(src,p,"data.json")}`),
      });

      mkdirp.sync(dest);
      fs.writeFileSync(`${dest}/${p}.html`, html, "utf-8");

      generated.push(`${path.relative(workdir, dest)}/${p}.html`);
    }
  });

  process.stdout.write(generated.map(g => "Generated " + g).join("\n") + "\n");
}
