import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes';
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

class App {
  public app: express.Application;
  routes: Routes = new Routes();
  mongoUrl: String = 'mongodb://127.0.0.1/requests';

  constructor() {
    this.app = express();
    this.configureBodyParser(); // must come before routes!
    this.configureCors();
    this.configureRoutes();
    this.configureDb();
  }

  private configureCors(): void {
    this.app.use( (req: Request, res: Response, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    } );
  }

  private configureBodyParser(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private configureRoutes(): void {
    this.routes.routes(this.app);
  }

  configureDb(): boolean {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    return true;
  }

}

export default new App().app;
