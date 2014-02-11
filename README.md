Angular testing tech talk
=========================

Very simple testing with karma and protractor.

This sample app is based on Julie's [protractor-demo](https://github.com/juliemr/protractor-demo)

Get the code and install the dependencies:

```sh
$ git clone https://github.com/andresdominguez/testing-tech-talk.git
$ cd testing-tech-talk
$ npm install
```

## Run the unit tests

The unit tests run on karma. To run karma just execute the following command.
```sh
$ ./node_modules/.bin/karma start
```

## Run the protractor tests

The e2e tests run on protractor. You will need 3 terminal windows to do it.

Download and start the selenium standalone server:
```sh
$ ./node_modules/protractor/bin/webdriver-manager update
$ ./node_modules/protractor/bin/webdriver-manager start
```

Open a new terminal and start the express server:
```sh
$ node app/expressserver.js
```

A calculator app will start on [http://localhost:3456/](http://localhost:3456/)

Open a third terminal and run protractor:
```sh
$ ./node_modules/protractor/bin/protractor conf.js
```
