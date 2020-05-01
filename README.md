# Cashin Website

## Pre-requisites & Setup

**Important!** This project use only yarn,
    Styled-Components,
    json-server, prop-types, 
    and react hooks.

### Install dependencies

> `$ yarn install`

### Lint

The file with all lint rules, is located at `.eslint.js`

> `$ yarn lint-src`

> `$ yarn lint-tests`

### Steps to start website

## First Step:
You need to start json-server firt with this command:
```json-server --watch user_data.json -p 3333```

#-p is the param for change the port.
why i need to change it? Because reactjs use port 3000

## Second Step
you need now, to start this project after install dependencies,
execute this command into another terminal

> `$ yarn start`

