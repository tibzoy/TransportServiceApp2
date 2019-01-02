import { Request, Response } from 'express';
import { RequestController } from './controllers/request';

export class Routes {

  requestController = new RequestController();

  public routes(app): void {
    app.route('/')
      .get( (req: Request, res: Response) => {
        res.status(200).send( { 'message': 'ok' } );
      } );
    app.route('/request')
      .post( this.requestController.createRequest )
      .get( this.requestController.getRequests );
    app.route('/request/:requestId')
      .get( this.requestController.getRequest );
  }

}
