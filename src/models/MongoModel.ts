import { Model as M, Document } from 'mongoose';
import { DeleteResult } from 'mongodb';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string): Promise<T | null> =>
    this.model.findOne({ _id: id });

  delete = async (id: string): Promise<T | DeleteResult | null> =>
    this.model.deleteOne({ _id: id });
}

export default MongoModel;