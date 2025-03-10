# asistencias-api

Este proyecto es un servidor backend construido con Node.js utilizando JavaScript. El proyecto sigue una arquitectura MVC y es adecuado para la implementación de APIs RESTful.

## Requisitos

Antes de empezar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone git@github.com:josuedevx-ia/asistencias-api.git
   cd ADO_BACKEND
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

## Configuración del servicio

1. Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias. Por ejemplo:

   ```plaintext
   PORT=3000
   ```

2. Asegúrate de configurar correctamente las credenciales de base de datos y otros parámetros necesarios en el archivo `.env`.

## Scripts Disponibles

En el directorio raíz del proyecto, puedes ejecutar:

### `npm start`

Inicia el servidor en modo de desarrollo utilizando [nodemon](https://nodemon.io/).El servidor se reiniciará automáticamente si realizas cambios en el código.

### `nodemon index.js` 

Inicia el servidor en modo de producción.

## Estructura del Proyecto

La estructura básica del proyecto es la siguiente:

```plaintext
nombre-del-repositorio/
├── node_modules/
├── src/
│   ├── middlewares/
│   ├── public/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── views/
│   └── index.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Agrega una nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un pull request.

## Licencia

Este proyecto está licenciado bajo la [MIT License](./LICENSE).