# Developer

## Running tests

Nothing here, so far.

## Build

> yarn build

or

> npm build

## Features

- [ ] Supported files
  - [x] .env
  - [x] .env.development
  - [x] .env.production
  - [ ] .env.local
  - [ ] .env.development.local
  - [ ] .env.production.local

- [ ] Supported format
  - [x] JSON
  - [x] JSONC
  - [ ] Hocon
    - Did not found a good library, and jsonc is enough for my needs

- [ ] Configuration
  - [ ] Support a glob matcher
    - Could use [glob](https://www.npmjs.com/package/glob) for instance
  - [ ] Support custom transformation
  - [ ] Support to rename the key that is used
  - [ ] Support a configuration per file type

## TODO

- Add a system to overwrite .env conf with .env.local conf
  - Need a different key
  - Need a loader in this case
    - Or we override the .env directly
  - Need a overwrite object library
    - Use an existing lib if possible
