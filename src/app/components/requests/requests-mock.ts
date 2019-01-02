import { Request } from './request';
import { RequestStatus } from './request-enum';

export const REQUESTS_MOCK: Request[] = [
  {
    _id: '1',
    purpose: 'Meeting Nestle suppliers',
    vehicle: {
      name: 'Innova',
      plateNumber: 'ABC123',
      driver: 'BenQ'
    },
    from: '2018-12-17 10:00',
    to: '2018-12-17 12:00',
    requester: 'Steven Ly',
    pickup: 'BGC HQ',
    destination: 'Nestle HQ, Rockwell, Makati',
    isWholeDay: false,
    department: 'IT',
    passsengers: 1,
    status: RequestStatus.SUBMITTED,
    created: new Date()
  },
  {
    _id: '2',
    purpose: 'Transport Product Samples',
    vehicle: {
      name: 'L300',
      plateNumber: 'XYZ123',
      driver: 'Allan'
    },
    from: '2018-12-17 09:00',
    to: '2018-12-17 16:00',
    requester: 'John Dough',
    pickup: 'BGC HQ',
    destination: 'Pasig Warehouse',
    isWholeDay: true,
    department: 'MD',
    passsengers: 4,
    status: RequestStatus.IN_PROGRESS,
    created: new Date()
  },
  {
    _id: '3',
    purpose: 'Transport Chairs',
    vehicle: {
      name: 'Strada',
      plateNumber: 'NHT123',
      driver: 'Vince'
    },
    from: '2018-12-19 09:00',
    to: '2018-12-19 16:00',
    requester: 'John Dough',
    pickup: 'BGC HQ',
    destination: 'Pasig Warehouse',
    isWholeDay: true,
    department: 'MD',
    passsengers: 4,
    status: RequestStatus.COMPLETED,
    created: new Date()
  },
  {
    _id: '4',
    purpose: 'Transport Self',
    vehicle: {
      name: 'L300',
      plateNumber: 'XYZ123',
      driver: 'Allan'
    },
    from: '2018-12-21 09:00',
    to: '2018-12-21 16:00',
    requester: 'John Dough',
    pickup: 'BGC HQ',
    destination: 'Pasig Warehouse',
    isWholeDay: true,
    department: 'MD',
    passsengers: 4,
    status: RequestStatus.CANCELLED,
    created: new Date()
  }
];
