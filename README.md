#Flight Service Project

##Setup of Project

- clone the project to your local system
- Execute `npm install` on the same path of root project
- Create a `.env` file in the root directory and add the following env variable
  - `PORT=3000`
- Inside the `src/config/` folder create a new file config.json and add the following configs

```
{
  "development": {
    "username": "<username>",
    "password": "<password>",
    "database": "Flightsearch",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port":"<postgres local port>"
  }
```

- once you added above config run `npx sequelize db:create` inside terminal
