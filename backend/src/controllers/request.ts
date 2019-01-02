import { Request, Response } from 'express';
import { RequestSchema } from '../models/request';
import * as mongoose from 'mongoose';

const Request = mongoose.model('Request', RequestSchema);

export class RequestController {

  public createRequest(req: Request, res: Response): void {
    const newRequest = new Request(req.body);
    newRequest.save( (err, request) => {
      if ( err ) {
        res.status(422).send(err);
      } else {
        res.status(200).json(request);
      }
    } );
  }

  public getRequests(req: Request, res: Response): void {
    Request.find({}, (err, requests) => {
      if ( err ) {
        res.status(404).send(err);
      } else {
        res.status(200).json(requests);
      }
    });
  }

  public getRequest(req: Request, res: Response): void {
    const id = req.params.requestId;
    Request.findById(id, (err, request) => {
      if ( err ) {
        res.status(404).send(err);
      } else {
        res.status(200).json(request);
      }
    });
  }

}
