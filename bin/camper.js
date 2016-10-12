#!/usr/bin/env node

"use strict";

require("babel-register")({
  presets: [
    "es2015",
    "react"
  ]
});

const path = require("path");
const fs = require("fs");
const program = require("commander")
const pkg = require("../package.json");
const mkdirp = require("mkdirp");

const version = pkg.version;

program
  .version(version)
  .option("-d, --dest [dest]", "Destinations directory")
  .option("[source]", "Source for pages to be generated")
  .parse(process.argv);


const defaults = {
  source: "src",
};

const workdir = process.cwd();

const dir = path.join(workdir, program.args[0]);
const out = path.join(workdir, program.dest || "dist");
const pages = fs.readdirSync(dir);

const compilers = {
  jsx: require("../dist/compilers/react").default,
};

let generated = [];

pages.forEach((p) => {
  const files = fs.readdirSync(path.join(dir, p));
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
      page: path.join(dir, p),
      data: require(`${path.join(dir,p,"data.json")}`),
    });

    mkdirp.sync(out);
    fs.writeFileSync(`${out}/${p}.html`, html, "utf-8");

    generated.push(`${program.dest}/${p}.html`);
  }
});

process.stdout.write(generated.map(g => "Generated " + g).join("\n") + "\n");
