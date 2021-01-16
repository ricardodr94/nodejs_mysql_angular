"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
//Corriendo servidor
const server = new server_1.default();
server.start();
//Rutas
const routerMain = new router_1.default();
server.app.use(routerMain.router);
