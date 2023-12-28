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

The recommended Node.js version to use in this project is specified in the `.nvmrc` file, at the root directory.

> [!NOTE]
> By installing and using [NVM](https://github.com/nvm-sh/nvm) you can automatically change to the version specified in `.nvmrc`. Just run the following command:
> ```
> nvm use
> ```


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

And the administration panel at `http://localhost:1337/admin`

### Other Commands:
- `yarn build`: creates the production build version.
- `yarn start`: starts a server with the build production code.

## :star2: Credits

The development of this API was part of a [course](https://www.udemy.com/course/react-avancado) created by: William Justen and Guilherme Louro. Big thanks to you guys!

<br />

:smile: You can find me here:

[![Linkedin Badge](https://img.shields.io/badge/-Matheus_Machado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/matheusmachado-dev/)

<br />

[:arrow_up: Back to Top](#----won-games-api--)
