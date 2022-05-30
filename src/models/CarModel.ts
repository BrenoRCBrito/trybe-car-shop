import { Schema, model as createModel, Document } from 'mongoose';
import { Car } from '../interfaces/CarInterface';
import MongoModel from './MongoModel';

interface CarDocument extends Car, Document {}

const carSchema = new Schema<CarDocument>(
  {
    buyValue: Number,
    color: String,
    doorsQty: Number,
    model: String,
    seatsQty: Number,
    year: Number,
  },
  { versionKey: false },
);

export default class CarModel extends MongoModel<Car> {
  constructor(model = createModel('Cars', carSchema)) {
    super(model);
  }
}
