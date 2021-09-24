
## Installation

$ npm install

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Запросы проверялись при помощи Postman.

Список всех кошек /GET http://127.0.0.1:3000/cats
Список одного кота(кошки) /GET http://127.0.0.1:3000/cats/N (N-айди котика)
Удаление кота(кошки) /DELETE http://127.0.0.1:3000/cats/N
Изменение кота(кошки) /PUT http://127.0.0.1:3000/cats/N
Породы кошек выведены в отдельную сущность: /GET http://127.0.0.1:3000/kinds
