# Abao Example

In this example project you can check how [abao](https://github.com/cybertk/abao) work.

## Api
It uses Express application. Api described in `api.raml`. Check `routes/users` for logic.

## Hooks
Abao makes [mocha](http://mochajs.org) test for every route-response. For different response you can use hooks. Check `test\abao`

## Running
1. Clone project.
2. Run `npm install` for installing dependencies.
3. Start app `npm start`.
3. Run `npm test` or `./node_modules/.bin/abao api.raml http://localhost:3000 --hookfiles=./test/abao/*`.