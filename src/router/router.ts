import { Router, Request, Response } from 'express';

export default class RouterMain{

    public router:Router = Router();

    constructor(){
        this.configRouter();

    }

    configRouter():void{
        this.router.get('/', ( req:Request, res:Response )=>{
             res.send('Funciona correctamente desde puerto 3000')
        });
    }
    
}

