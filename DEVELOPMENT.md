## Getting started

* To check if you already have NPM installed, run `npm --version`.  If this command is not found, [install NPM and Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/).
* Run `node --version` to check your currently installed Node version.  If earlier than v22, update to Node v22 using your preferred Node version manager or installer.
* Run the following to set up your local project and validate it builds successfully:

```sh
npm install
npm run build && npm run test
```

* Run `npm run dev` to run a local server, and visit the URL linked in the terminal output to test your code changes.

## Locally testing mobile usability

### Mozilla Firefox
* Open Firefox and navigate to the webpage you want to test.
* Press CTRL+SHIFT+M to switch between desktop and mobile views.
* In mobile view, switch between device presets while navigating through the game to validate it renders well across devices, and update styles as needed to resolve display issues.

### Google Chrome
* Open Chrome and navigate to the webpage you want to test.
* Press CTRL+SHIFT+I to open Developer Tools.
* Press CTRL+SHIFT+M to toggle the device toolbar, which allows you to switch between desktop and mobile views.
* In mobile view, switch between device presets while navigating through the game to validate it renders well across devices, and update styles as needed to resolve display issues.

## Useful commands

* `npm run build` - generate optimized production build
* `npm run test` - run linter and unit tests
* `npm run test:no-lint` - run unit tests without lint style checks
* `npm run test:watch` - run unit tests now, and every time files are updated
* `npm run deploy` - deploy local dist/ directory to GitHub Pages

See [package.json](package.json)'s `scripts` for all available commands.
