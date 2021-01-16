import Server from './server/server';
import RouterMain from './router/router';

//Corriendo servidor
const server = new Server();
server.start();


//Rutas
const routerMain = new RouterMain();
server.app.use(routerMain.router);
