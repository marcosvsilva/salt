# Salt software.

Salt software is a platform for a shopping list. That platform has a feature to build a shopping list, save prices and compare with history shopping, suggest places that have a chipper price, and new features are coming.

## Getting started

This repository has docker-compose files to deploy salt software.

First, get the services:

* [salt-server](https://github.com/marcosvsilva/salt-server)
* [salt-frontend](https://github.com/marcosvsilva/salt-frontend)

Next, use docker-compose to build docker images and deploy application for each docker-compose:

```bash
docker-compose build && docker-compose up
```

## License

This site template is a commercial product and is licensed under the [MIT license](https://mit-license.org/).
