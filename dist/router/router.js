"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RouterMain {
    constructor() {
        this.router = express_1.Router();
        this.configRouter();
    }
    configRouter() {
        this.router.get('/', (req, res) => {
            res.send('Funciona correctamente desde puerto 3000');
        });
    }
}
exports.default = RouterMain;
