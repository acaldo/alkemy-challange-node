# Alkemy
## _Challange Node_

## Características

- Validación de esquemas con Joi
- Validación de errores @hapi/boom
- Autentificacion con passportJS y JWT
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF


## Tech


- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [hapi/boom](https://github.com/hapijs/boom#readme) - HTTP-friendly error objects
- [Joi](https://github.com/sideway/joi#readme) - The most powerful schema description language and data validator for JavaScript.
- [Json Web Token](https://github.com/auth0/node-jsonwebtoken#readme)
- [Passport](https://www.passportjs.org/) - Simple, unobtrusive authentication for Node.js 


## Instalacion

Se requiere [Node.js](https://nodejs.org/){target="_blank" rel="noopener"} v16+ para su funcionamiento.

Instalar dependencias

```sh
npm i
```

Uso

```sh
npm run dev
```



## Docker

La base de datos esta en un container de docker

```sh
docker-compose up -d postgres
```
Si se quisiera conectar con postgres nativo cambiar los .env


## Documentación
[Documentación](https://impartial-galley-502.notion.site/Docs-459c915c831443a981ab9a89411687c5)

## Productin
La aplicacion se encuentra subida en heroku 
https://arcane-brook-17250.herokuapp.com/


## License

MIT


