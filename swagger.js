const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: "Star Wars Translator API Documentation",
            description: "Star Wars Translator API Test",
            contact: {
                name: "Developer"
            },
        }
    },
    apis: ['./src/**/*.routes.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const swagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerDocs);
    });
}


module.exports = { swagger }