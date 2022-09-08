# Nest.js and Prisma ORM

A simple project to do an overview of Prisma ORM and Nest.js

## Requirements

To run this project, the following tools and applications have to be installed:

- Node.js (This project used v16.15.0)
- NPM
- Nest.js
- Nest.js CLI
- PostgresSQL (or any other database that Prisma supports)

## Sample requests for testing

- Create a book

```
curl --location --request POST 'localhost:3000/v1/books' \
--header 'Content-Type: application/json' \
--data-raw '{
    "author": "Martin Kleppmann",
    "pages": 611,
    "publisher": "O'\''Reilly Media, Inc.",
    "title": "Designing Data-Intensive Applications"
}'
```

- List all books

```
curl --location --request GET 'localhost:3000/v1/books'
```

- List book by id

```
curl --location --request GET 'localhost:3000/v1/books/03ca8c7d-0d44-4eb6-97b8-0ad0a5114701'
```

- Edit book

```
curl --location --request PUT 'localhost:3000/v1/books/03ca8c7d-0d44-4eb6-97b8-0ad0a5114701' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pages": 500
}'
```

- Delete book

```
curl --location --request DELETE 'localhost:3000/v1/books/03ca8c7d-0d44-4eb6-97b8-0ad0a5114701'
```
