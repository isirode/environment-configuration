# environment-configuration

This is a Node command line tool allowing to transform a .env.json (writting in [json](https://www.npmjs.com/package/jsonc)), to .env file entry (ENV_JSON), a single line JSON.

Example, in an .env.json file:

```jsonc
{
  // the remote server
  "server": "www.my-server.com",
  "port": 9999,
  "anotherOption": {
    "anArrayOption": [
      "allow", "something"
    ]
  }
}
```

Supported .env files:
- .env
- .env.development
- .env.production

It is what I use for configuring my ParcelJS projects.

It was made, because other libraries, trying to solve the same problem, offer to create keys like OBJ_SUBKEY_SUBKEY, with an unclear path to sub-sub properties, etc. 
This tool allow to use a simple JSON as a configuration.

## Using the project

It is not published to a repository yet, so you will need to follow the steps below:

- Download the project
- `npm install`
- `npm build`
- `npm link`

Then you can use it in your project, the command is *enviro*.

With package.json as such:

```json
{
  ...
  "scripts": {
    "start": "parcel --no-cache",
    "prestart": "enviro",
    "prebuild": "enviro && rimraf dist",
    "build": "parcel build --no-optimize --no-scope-hoist --public-url ./",
    "test": "jest --config jest.config.js"
  },
  ...
}
```

As you can see, I've binded the pre* hooks to `enviro`.

If have a .env.json file:

```jsonc
{
  // the remote server
  "server": "www.my-server.com",
  "port": 9999,
  "anotherOption": {
    "anArrayOption": [
      "allow", "something"
    ]
  }
}
```

It will output a .env like this:

```env
ENV_JSON = '{"server":"www.my-server.com","port":9999,"anotherOption":{"anArrayOption":["allow","something"]}}'
```

That you can use in your code like this (Typescript code below):

```typescript

interface OtherOption {
  anArrayOption: string[];
}

interface Config {
  server: string;
  port: number;
  anotherOption: OtherOption;
}

const config: Config = JSON.parse(process.env.ENV_JSON);

// then you can use it

```

Note that I do not provide a loader, simple JSON parsing should be able to load it.

## Importing the project

Nothing here yet.

## Know issues

- I only support the 3 files listed above, if you want more, or something more customizable, open a PR

## Partipating

Open the [DEVELOPER.md](./DEVELOPER.md) section.

## License

It is provided with the GNU AFFERO GENERAL PUBLIC LICENSE.

This is a Node command line tool allowing to transform a .env.json (writting in [json](https://www.npmjs.com/package/jsonc)), to a .env file.

Copyright (C) 2023  Isirode

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
