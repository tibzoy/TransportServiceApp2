import { Request, Response } from 'express';
import { RequestSchema } from '../models/request';
import * as mongoose from 'mongoose';
import { Status } from '../models/status-enum';

const Request = mongoose.model('Request', RequestSchema);

export class RequestController {

  public acceptRequest(req: Request, res: Response): void {
    const id = req.params.requestId;
    Request.findOneAndUpdate(
      {_id: id},
      {
        $set: {
          status: Status.IN_PROGRESS
        }
      },
      {
        new: true
      },
      (err, request) => {
        if (err) {
          res.status(422).send(err);
        } else {
          res.status(200).json(request);
        }
      }
    );
  }

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
    const _date = req.query.d.length ? req.query.d : new Date().toISOString().split('T')[0].toString();
    const _from = new Date(`${_date}T00:00:00.000Z`);
    const _to = new Date(`${_date}T23:59:59.000Z`);
    Request.find({
      from: {
        $gte: _from,
        $lt: _to
      }
    }, (err, requests) => {
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
