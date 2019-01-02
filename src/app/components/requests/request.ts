import { RequestStatus } from './request-enum';

export class Request {
  _id: string;
  purpose: string;
  vehicle: any;
  from: string;
  to: string;
  requester: string;
  pickup: string;
  destination: string;
  isWholeDay: boolean;
  department: string;
  passsengers: number;
  status: RequestStatus;
  created: Date;

}
