# yieldify-demo

Demo code for Yieldify's Engineering Take Home Challenge.


### Development quick start

```bash
# clone the repo
git clone https://github.com/spiralx/yieldify-demo.git

# change dir to demo
cd yieldify-demo

# install dependencies
npm install

# start the application
npm start
```

Go to [http://localhost:8080]() in your browser to see the demo. Any changes to the code will
automatically be compiled and the browser page will reload with the latest version.


### Testing

The following two commands can be used to run unit tests either once, or every time the source changes:

```bash
# run tests once
npm test

# watch for code changes and run tests after
npm run test-watch
```

End-to-end tests can be run using:

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out Protractor commands without starting up the entire test suite. You can do this with the element explorer.
  * you can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)


### Production build

To build the project for production use you can use the following commands:

```bash
# build code
npm run build

# build code after each code change
npm run watch
```

### Acknowledgements

This project used the [preboot/angular2-webpack](https://github.com/preboot/angular2-webpack.git) starter kit as its basis.
