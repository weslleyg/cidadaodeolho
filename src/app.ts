import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes';

class App {
    public express: express.Application

    public constructor() {
        this.express = express();

        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
        this.express.use(express.json());
    }

    private database(): void {
        mongoose.connect('mongodb+srv://projdarf:q1w2e3@cluster0.nfurv.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }

    private routes(): void {
        this.express.use(router);
    }
}

export default new App().express