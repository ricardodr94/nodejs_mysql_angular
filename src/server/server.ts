import express = require('express');
import morgan = require('morgan');
import cors = require('cors');

export default class Server {

    public app = express.application;

    constructor() {
        this.app = express();
        this.configPort();
    }

    //metodo de definicion de puerto
    configPort():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }


    //metodo para inicializar el servidor
    start():void {
       this.app.listen(this.app.get('port'), ()=>{
           console.log(`Servidor corriendo en el puerto ${this.app.get('port')}`);
       });
    }
}





