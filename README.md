# Node REST Example <a href="https://travis-ci.org/lohanbodevan/node-rest-example"><img alt="Travis Status" src="https://travis-ci.org/lohanbodevan/node-rest-example.svg?branch=master"></a>
A simple bootstrap Node REST api example using [Koa](http://koajs.com/) micro framework and [Sequelize](https://github.com/sequelize/sequelize) ORM.

As default this example use sqlite3.

## Requirements
Node.js 6.x

## Installation
```
npm install
```

## Run Tests
```
npm test
```

## Run App
```
npm start
```

## API
Will be available on http://localhost:3000
```
GET /healthcheck
{
  service: true,
  database: true
}
```

```
GET /persons
[
  {
    id: 1,
    firstName: "John",
    lastName: "Hancock",
    createdAt: "2016-07-26T19:59:25.253Z",
    updatedAt: "2016-07-26T19:59:25.253Z"
  }
]
```
