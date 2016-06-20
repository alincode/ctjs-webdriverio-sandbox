# ctjs-webdriverio-sandbox

## init project
```
// create project
mkdir ctjs-webdriverio-sandbox
cd ctjs-webdriverio-sandbox

npm init -y
npm i webdriverio -D
npm i wdio-selenium-standalone-service -D
```

## setting config
```
./node_modules/webdriverio/bin/wdio

mkdir -p ./test/specs/
mkdir -p ./errorShots/
```

**vi wdio.conf.js**
```
capabilities: [{
  browserName: 'chrome'
}],
services: ['selenium-standalone'],
mochaOpts: {
  timeout: 60000
},
```
