# Camper
Generate static sites.

## Getting started

Create a directory structure as below...

### Directory setup

```
/src/
/src/page
/src/page/index.jsx
/src/page/data.json
```

Each folder will represent a different page that will output after `camper` runs.

For example, if you have `/src/about/index.jsx`, you'll get an `about.html` in the `dist` folder.

### Install and run

```shell
npm install --save-dev camper

# OR add the following to your package.json under dependencies

"camper": "https://github.com/lonelyplanet/camper"

# Then run it...

camper src
```
