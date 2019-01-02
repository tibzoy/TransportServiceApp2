import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RequestSchema = new Schema({
  status: {
    type: String,
    enum: [ 'SUBMITTED', 'IN PROGRESS', 'COMPLETED', 'CANCELLED'],
    default: 'SUBMITTED'
  },
  department: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  requester: {
    type: String,
    required: true
  },
  pickup: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  from: {
    type: Date,
    required: 'From (ISO Date) is required.',
    validate: {
      validator: value => Date.parse(value),
      message: props => `Not a valid date format.`
    }
  },
  to: {
    type: Date,
    // required: 'To (ISO Date) is required.',
    // validate: {
    //   validator: value => Date.parse(value),
    //   message: props => `Not a valid date format.`
    // }
  },
  created: {
    type: Date,
    default: Date.now
  },
  vehicle: {
    plate: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },
  passengers: {
    type: Number,
    min: 1,
    max: 15
  },
  isWholeDay: {
    type: Boolean,
    default: false
  }
});
