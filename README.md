# Star Wars Translator API Test

Prueba técnica para transformar los atributos de las respuestas del API de Star Wars a español.

Star Wars API: https://swapi.py4e.com/documentation

# Compilación

Instalación de dependencias del proyecto: `npm install`

# Ejecución local

Debe crear el archivo `.env.<entorno>` **(entorno: local, development)** en la raíz del proyecto y crear las variables de entorno definidas en el archivo `.env_template`

Ejecución del API en entorno local: `npm run start:<entorno>`

# Pruebas

Para ejecutar las pruebas, utiliza el comando `npm run test`

# Despliegue

Debe crear el archivo `.env.development` y crear las variables de acuerdo al archivo `.env_template`.

Para desplegar el proyecto, debe tener instalado y configurado `aws cli` con las credenciales respectivas.

Luego, debe ejecutar el comando `npm run deploy:dev` para empezar el proceso de despliegue de Serverless Framework.

Nota: Se ha configurado el entorno de `development`. Se deben crear los archivos `.env.<entorno>` y modificar el archivo `package.json` para desplegar en otros entornos

