"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
class Server {
    constructor() {
        this.app = express.application;
        this.app = express();
        this.configPort();
    }
    //metodo de definicion de puerto
    configPort() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    //metodo para inicializar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor corriendo en el puerto ${this.app.get('port')}`);
        });
    }
}
exports.default = Server;
