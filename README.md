<div align="center">
  <img src="https://github.com/Matheuslm10/wongames-client/assets/17602947/527b7cfd-9d2f-41ee-8d4b-771da98369ac" width="80">
  <h1 align="center">
    Won Games (API)
  </h1>
</div>

### Table of Contents

- [:gear: The API](#gear-the-api)
- [:hammer\_and\_wrench: Technologies](#hammer_and_wrench-technologies)
- [:computer: How to run](#computer-how-to-run)
- [:star2: Credits](#star2-credits)

## :gear: The API

This API was developed to manage requests from the [client application](https://github.com/Matheuslm10/wongames-client) of Won Games, a PC game e-commerce. This service is responsible for querying and modifying the Database, along with overseeing access permissions to specific functionalities. Moreover, the API offers a GraphQL endpoint and a user interface for the administration of the e-commerce content.

Check out the administration panel:

https://github.com/Matheuslm10/wongames-client/assets/17602947/84a4daeb-7ff8-4982-a940-56fc873bfa6b

## :hammer_and_wrench: Technologies

<table>
  <tr>
    <td align="center">
        <img src="https://github.com/Matheuslm10/wongames-client/assets/17602947/707d6384-a00b-4db4-b7e7-64c7590347a7" width="50" />
        <p><small><a href="https://storybook.js.org/">Strapi</a></small></p>
    </td>
    <td align="center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" width="50" />
        <p><small><a href="https://www.docker.com/">Docker</a></small></p>
    </td>
  </tr>
</table>

## :computer: How to run

### Requirements

This project uses [PostgreSQL](https://www.postgresql.org/), so, in order to make it working, install in your local machine or use Docker.

The configuration to the Database can be found on [config/database.js](config/database.js)

### Node.js Version

The recommended Node.js version to use in this project is specified in the `.nvmrc` file, at the root directory.

> [!NOTE]
> By installing and using [NVM](https://github.com/nvm-sh/nvm) you can automatically change to the version specified in `.nvmrc`. Just run the following command:
> ```
> nvm use
> ```

### Running

Clone the repository:
```
git clone https://github.com/Matheuslm10/wongames-api.git
```

Enter the directory:
```
cd wongames-api
```

Install the dependencies:
```
yarn install
```

Run the application:
```
yarn develop
```

Now you can access the server at `http://localhost:1337`.

The administration panel at `http://localhost:1337/admin`.

And the GraphQL playground at `http://localhost:1337/graphql`.

> [!IMPORTANT]
> The first time to access the Admin you'll need to create an user.

### Other Commands
- `yarn build`: creates the production build version.
- `yarn start`: starts a server with the build production code.

### Populate data

This project uses a `/games/populate` route in order to populate the data via GoG site.
In order to make it work, follow the steps:

- Go to Roles & Permissions > Public and make sure `game:populate` route is public available and the upload as well
- With Strapi running run the following comand in your console:

```bash
$ curl -X POST http://localhost:1337/games/populate

# you can pass query parameters like:
$ curl -X POST http://localhost:1337/games/populate?page=2
$ curl -X POST http://localhost:1337/games/populate?search=simcity
$ curl -X POST http://localhost:1337/games/populate?sort=rating&price=free
$ curl -X POST http://localhost:1337/games/populate?availability=coming&sort=popularity
```

### Using dump

First of all, you need to download our [dump.sql](https://github.com/Matheuslm10/wongames-database/blob/master/dump.sql) from our [database repository](https://github.com/Matheuslm10/wongames-database).

1. Create a Postgres database and user:

```sh
CREATE USER wongames WITH ENCRYPTED PASSWORD 'wongames123';
CREATE DATABASE wongames OWNER wongames;
```

2. Populate the new database, using the following command (remember to point the place where you have the `dump.sql`):

```sh
psql -h localhost -p 5432 -U wongames wongames < dump.sql
```

And you can access `localhost:1337/admin` with the following credentials:

```sh
email: wongames@wongames.com
password: Wongames123
```

## :star2: Credits

The development of this API was part of a [course](https://www.udemy.com/course/react-avancado) created by: William Justen and Guilherme Louro. Big thanks to you guys!

<br />

:smile: You can find me here:

[![Linkedin Badge](https://img.shields.io/badge/-Matheus_Machado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matheusmachado-dev/)

<br />

[:arrow_up: Back to Top](#----won-games-api--)
