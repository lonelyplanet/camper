#!/usr/bin/env node

"use strict";

require("babel-register")({
  presets: [
    "es2015",
    "react"
  ]
});

const program = require("commander")
const pkg = require("../package.json");
const generate = require("./_generate");

const version = pkg.version;

program
  .version(version)

program
  .command("generate [src]").alias("g")
  .description("Generate pages from [src] folder")
  .option("-d, --dest [dest]", "Destination directory")
  .action(generate);

program.parse(process.argv);
