<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A package extend <a href="https://www.npmjs.com/package/@nestjs/schematics">@nestjs/schematics</a> with more generating features</p>

## Description

This package extends all functions from [@nestjs/schematics](https://www.npmjs.com/package/@nestjs/schematics) and has more customization ones. This package helps a lot in generating CRUD module. It is so useful when you work with ORM like Typeorm or Mongoose.

## Installation

```bash
$ npm install -d @duyanhit/nestjs-schematics
```

## Usage
After installing, make sure you have adjusted your configuration in `nest-cli.json`
```json
{
  ...
  "collection": "@duyanhit/nestjs-schematics",
  ...
}

```
Now, let's try yourself with a new feature.

### CRUD
This function will generate a whole CRUD module base on your chosen ORM
```bash
$ nest g crud name
```
It will ask you about the transport layer. Currently, it just supports 2 layers `Restful` and `GraphQL (code first)`
```bash
? What transport layer do you use? (Use arrow keys)
❯ Restful API 
  GraphQL (code first)
```
Next, you can choose which ORM you want to use
```bash
? What ORM do want to you use? (Use arrow keys)
❯ Typeorm 
  Mongoose 
  Prisma 
  Sequelize
```
Specifically, this function supports generating module with CQRS pattern.
```bash
? Would you want to use CQRS pattern? (Y/n)
```
After you have done, the tree can be like this:
```bash
src/apis/user
├── commands
│   ├── create-user.command.ts
│   ├── remove-user.command.ts
│   └── update-user.command.ts
├── dto
│   ├── create-user.dto.ts
│   ├── paginated-user.dto.ts
│   └── update-user.dto.ts
├── entities
│   └── user.entity.ts
├── handlers
│   ├── create-user.handler.ts
│   ├── find-one-user.handler.ts
│   ├── find-user.handler.ts
│   ├── remove-user.handler.ts
│   └── update-user.handler.ts
├── queries
│   ├── find-one-user.query.ts
│   └── find-user.query.ts
├── user.controller.ts
├── user.interface.ts
├── user.module.ts
├── user.service.ts
└── user.swagger.ts
```

## Stay in touch
Thanks for considering this package. I hope you enjoy it. :)
This package is still developed. I will make it better with more amazing features. 
If you have any ideas or questions, contact me through:
- Email - [duyanh.it.work@gmail.com](mailto:duyanh.it.work@gmail.com)
- Linkedin - [Linkedin](https://www.linkedin.com/in/duy-anh-nguyen-a62292249/)
